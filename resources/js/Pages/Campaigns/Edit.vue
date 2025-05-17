<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head :title="`Edit Campaign - ${form.title}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/campaigns">Campaigns</Link>
      <span class="text-indigo-400 font-medium">/</span> Edit
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.title" :error="form.errors.title" class="pb-8 pr-6 w-full lg:w-1/2" label="Title" />
          <text-input v-model="form.description" :error="form.errors.description" class="pb-8 pr-6 w-full lg:w-1/2" label="Description" />
          <text-input v-model="form.start_date" :error="form.errors.start_date" type="date" class="pb-8 pr-6 w-full lg:w-1/2" label="Start Date" />
          <text-input v-model="form.end_date" :error="form.errors.end_date" type="date" class="pb-8 pr-6 w-full lg:w-1/2" label="End Date" />
          <text-input v-model="form.target_amount" :error="form.errors.target_amount" type="number" class="pb-8 pr-6 w-full lg:w-1/2" label="Target Amount (PKR)" />
          <select-input v-model="form.status" :error="form.errors.status" class="pb-8 pr-6 w-full lg:w-1/2" label="Status">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select-input>
        </div>
        <div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!form.processing && $can('delete-campaign')" type="button" @click="destroy" class="text-red-600 hover:text-red-900">Delete Campaign</button>
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Campaign</loading-button>
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

export default {
  components: {
    Head,
    Link,
    TextInput,
    SelectInput,
    LoadingButton,
  },
  layout: Layout,
  props: {
    campaign: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        title: this.campaign.title,
        description: this.campaign.description,
        start_date: this.campaign.start_date,
        end_date: this.campaign.end_date,
        target_amount: this.campaign.target_amount,
        status: this.campaign.status,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(`/campaigns/${this.campaign.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this campaign?')) {
        this.$inertia.delete(`/campaigns/${this.campaign.id}`)
      }
    },
  },
}
</script>
