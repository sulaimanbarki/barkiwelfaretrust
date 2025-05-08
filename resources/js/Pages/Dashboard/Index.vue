<template>
  <div>
    <Head title="Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h2 class="text-xl font-semibold">Total Donors</h2>
        <p class="text-3xl mt-2">{{ stats.donors }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h2 class="text-xl font-semibold">Total Beneficiaries</h2>
        <p class="text-3xl mt-2">{{ stats.beneficiaries }}</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h2 class="text-xl font-semibold">Total Campaigns</h2>
        <p class="text-3xl mt-2">{{ stats.campaigns }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    stats: Object,
  },
  components: {
    Head,
  },
  layout: Layout,
}
</script>
