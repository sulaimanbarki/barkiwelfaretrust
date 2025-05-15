<template>
  <div>
    <Head title="Reports" />
    <h1 class="mb-8 text-3xl font-bold">Reports</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link href="/reports/donations-by-date" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Donations by Date
      </Link>
      <Link href="/reports/donations-by-campaign" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Donations by Campaign
      </Link>
      <Link href="/reports/expenses-by-program" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Expenses by Program
      </Link>
      <Link href="/reports/financial-summary" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Financial Summary
      </Link>
      <Link href="/reports/campaign-progress" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Campaign Progress
      </Link>
      <Link href="/reports/beneficiaries-by-program" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Beneficiaries by Program
      </Link>
      <Link href="/reports/top-donors" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center">
        Top Donors
      </Link>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  components: {
    Head,
    Link,
  },
  layout: Layout,
}
</script>
