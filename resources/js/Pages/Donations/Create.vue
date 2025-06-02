<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Create Donation" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/donations">Donations</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <!-- Donation Type: Donor or Campaign -->
          <select-input v-model="form.type" :error="form.errors.type" class="pb-8 pr-6 w-full lg:w-1/2" label="Donation Type">
            <option value="donor">Donor</option>
            <option value="campaign">Campaign</option>
          </select-input>

          <!-- Select Donor or Campaign based on type -->
          <select2-input v-model="form.type_id" :options="typeOptions" :error="form.errors.type_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Select Donor or Campaign" :key="entitySelectKey" />

          <!-- Amount -->
          <text-input v-model="form.amount" :error="form.errors.amount" class="pb-8 pr-6 w-full lg:w-1/2" label="Amount (PKR)" type="number" />

          <!-- Donation Date -->
          <text-input v-model="form.donation_date" :error="form.errors.donation_date" class="pb-8 pr-6 w-full lg:w-1/2" label="Donation Date" type="date" />

          <!-- Dynamic Payment Method Dropdown -->
          <!-- Now populated from props.paymentMethods passed from the backend -->
          <select-input v-model="form.payment_method" :error="form.errors.payment_method" class="pb-8 pr-6 w-full lg:w-1/2" label="Payment Method">
            <!-- Generate options from passed array -->
            <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
              {{ method.name }}
            </option>
          </select-input>

          <!-- Reference No -->
          <text-input v-model="form.reference_no" :error="form.errors.reference_no" class="pb-8 pr-6 w-full lg:w-1/2" label="Reference No" />

          <!-- Purpose -->
          <text-input v-model="form.purpose" :error="form.errors.purpose" class="pb-8 pr-6 w-full lg:w-full" label="Purpose" />
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit"> Create Donation </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import Select2Input from '@/Shared/Select2Input.vue'
import axios from 'axios'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input,
  },
  layout: Layout,
  remember: 'form',

  // Accept donors, campaigns, and dynamic payment methods from backend
  props: {
    donors: Array,
    campaigns: Array,
    paymentMethods: Array,
  },

  data() {
    const today = new Date().toISOString().split('T')[0] // Format date as YYYY-MM-DD
    const easypaisa = this.paymentMethods.find((method) => method.name.toLowerCase() === 'easypaisa')

    return {
      form: this.$inertia.form({
        type: 'donor',
        type_id: null,
        amount: '',
        donation_date: today,
        payment_method: easypaisa ? easypaisa.id : this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null,
        reference_no: '',
        purpose: '',
      }),
      entitySelectKey: 0, // used to re-render donor/campaign select on type change
    }
  },

  computed: {
    // Compute donor/campaign options based on selected type
    typeOptions() {
      return this.form.type === 'donor' ? this.donors.map((d) => ({ id: d.id, name: d.full_name })) : this.campaigns.map((c) => ({ id: c.id, name: c.title }))
    },
  },

  watch: {
    // Reset type_id when type changes (donor <-> campaign)
    'form.type'(newVal) {
      this.form.type_id = null
      this.entitySelectKey += 1
    },

    'form.type_id'(newVal) {
      if (this.form.type === 'donor' && newVal) {
        this.fetchDonorDefaults(newVal)
      }
    },
  },

  methods: {
    // Submit form
    store() {
      this.form.post('/donations')
    },

    async fetchDonorDefaults(donorId) {
      try {
        const response = await axios.get(`/donors/${donorId}/defaults`)

        // Ensure these values are valid before assigning
        if (response.data.monthly_donation !== undefined) {
          this.form.amount = response.data.monthly_donation
        }

        if (response.data.payment_method) {
          this.form.payment_method = parseInt(response.data.payment_method)
        }
      } catch (error) {
        console.error('Failed to fetch donor defaults:', error)
      }
    },
  },
}
</script>
