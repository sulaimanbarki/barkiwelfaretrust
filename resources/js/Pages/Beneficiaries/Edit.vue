<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head :title="`Edit Beneficiary - ${form.full_name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/beneficiaries">Beneficiaries</Link>
      <span class="text-indigo-400 font-medium">/</span> Edit
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.full_name" :error="form.errors.full_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Full Name" />
          <text-input v-model="form.father_name" :error="form.errors.father_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Father Name" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone" />
          <text-input v-model="form.cnic_num" :error="form.errors.cnic_num" class="pb-8 pr-6 w-full lg:w-1/2" label="CNIC Number" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address" />
          <text-input v-model="form.permanent_address" :error="form.errors.permanent_address" class="pb-8 pr-6 w-full lg:w-1/2" label="Permanent Address" />
          <text-input v-model="form.notes" :error="form.errors.notes" class="pb-8 pr-6 w-full" label="Notes" type="textarea" />
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!form.processing" type="button" @click="destroy" class="text-red-600 hover:text-red-900">Delete Beneficiary</button>
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Beneficiary</loading-button>
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
  props: {
    beneficiary: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: this.beneficiary.full_name,
        father_name: this.beneficiary.father_name,
        phone: this.beneficiary.phone,
        address: this.beneficiary.address,
        permanent_address: this.beneficiary.permanent_address,
        notes: this.beneficiary.notes,
        cnic_num: this.beneficiary.cnic_num,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(`/beneficiaries/${this.beneficiary.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this beneficiary?')) {
        this.$inertia.delete(`/beneficiaries/${this.beneficiary.id}`)
      }
    },
  },
}
</script>