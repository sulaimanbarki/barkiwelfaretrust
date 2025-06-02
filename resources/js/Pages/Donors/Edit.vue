<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head :title="`Edit Donor - ${form.full_name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/donors">Donors</Link>
      <span class="text-indigo-400 font-medium">/</span> Edit
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.full_name" :error="form.errors.full_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Full Name" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address" />

          <select2-input v-model="form.country_id" :options="countries" :error="form.errors.country_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Country" @change="fetchCities" />

          <select2-input v-model="form.city_id" :options="filteredCities" :error="form.errors.city_id" class="pb-8 pr-6 w-full lg:w-1/2" label="City" :disabled="!form.country_id" :key="citySelectKey" />
          <!-- Payment Method Dropdown -->
          <select-input v-model="form.payment_method" :error="form.errors.payment_method" class="pb-8 pr-6 w-full lg:w-1/2" label="Payment Method">
            <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
              {{ method.name }}
            </option>
          </select-input>
          <select-input v-model="form.donor_type" :error="form.errors.donor_type" class="pb-8 pr-6 w-full lg:w-1/2" label="Donor Type">
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select-input>

          <text-input v-model="form.monthly_donation" :error="form.errors.monthly_donation" class="pb-8 pr-6 w-full lg:w-1/2" label="Monthly Donation (PKR)" type="number" />
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!form.processing && $can('delete-donor')" type="button" @click="destroy" class="text-red-600 hover:text-red-900">Delete Donor</button>
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Donor</loading-button>
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
import { nextTick } from 'vue'

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
  props: {
    donor: Object,
    countries: Array,
    cities: Array,
    paymentMethods: Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: this.donor.full_name,
        phone: this.donor.phone,
        address: this.donor.address,
        country_id: this.donor.country_id,
        city_id: this.donor.city_id,
        donor_type: this.donor.donor_type,
        monthly_donation: this.donor.monthly_donation,
        payment_method: this.donor.payment_method ?? (this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null),
      }),
      filteredCities: [],
      citySelectKey: 0,
    }
  },
  async mounted() {
    if (this.form.country_id) {
      await this.fetchCities(this.form.country_id)
    }
  },
  methods: {
    update() {
      this.form.put(`/donors/${this.donor.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this donor?')) {
        this.$inertia.delete(`/donors/${this.donor.id}`)
      }
    },
    async fetchCities(countryId) {
      if (!countryId) {
        this.filteredCities = []
        this.form.city_id = null
        this.citySelectKey += 1
        return
      }

      try {
        const response = await axios.get(`/countries/${countryId}/cities`)
        this.filteredCities = response.data

        await nextTick() // allow Vue to render dropdown

        const validCity = this.filteredCities.find((city) => city.id === this.form.city_id)
        if (!validCity) {
          this.form.city_id = null
        }

        this.citySelectKey += 1
      } catch (error) {
        console.error('Error fetching cities:', error)
        this.filteredCities = []
        this.form.city_id = null
        this.citySelectKey += 1
      }
    },
  },
  watch: {
    'form.country_id'(newVal) {
      this.fetchCities(newVal)
    },
  },
}
</script>