<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Create Beneficiary" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/beneficiaries">Beneficiaries</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input
            v-model="form.full_name"
            :error="form.errors.full_name"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Full Name"
          />
          <text-input
            v-model="form.phone"
            :error="form.errors.phone"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Phone"
          />
          <text-input
            v-model="form.email"
            :error="form.errors.email"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Email"
          />
          <text-input
            v-model="form.address"
            :error="form.errors.address"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Address"
          />

          <!-- ✅ New CNIC field -->
          <text-input
            v-model="form.cnic_num"
            :error="form.errors.cnic_num"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="CNIC"
          />

          <text-input
            v-model="form.notes"
            :error="form.errors.notes"
            class="pb-8 pr-6 w-full"
            label="Notes"
            type="textarea"
          />
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">
            Create Beneficiary
          </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: { Head, Link, TextInput, LoadingButton },
  layout: Layout,
  data() {
    return {
      form: this.$inertia.form({
        full_name: '',
        phone: '',
        email: '',
        address: '',
        cnic_num: '', // ✅ Add CNIC to form data
        notes: '',
      }),
    }
  },
  methods: {
    store() {
      this.form.post('/beneficiaries')
    },
  },
}
</script>
