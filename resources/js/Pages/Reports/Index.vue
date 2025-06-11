<template>
  <div>
    <Head title="Reports" />
    <h1 class="mb-8 text-3xl font-bold">Reports</h1>

    <!-- Donations Reports -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Donation Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/reports/donations-by-date" class="report-link">Donations by Date</Link>
        <Link href="/reports/donations-by-campaign" class="report-link">Donations by Campaign</Link>
        <Link href="/reports/top-donors" class="report-link">Top Donors</Link>
        <Link href="/reports/donors-donations" class="report-link">Donors and Donations</Link>
      </div>
    </section>

    <!-- Campaign Reports -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Campaign Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/reports/campaign-progress" class="report-link">Campaign Progress</Link>
      </div>
    </section>

    <!-- Expense & Financial Reports -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Financial Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/reports/expenses-by-program" class="report-link">Expenses by Program</Link>
        <Link href="/reports/financial-summary" class="report-link">Financial Summary</Link>
        <Link href="/reports/current-balance" class="report-link">Current Balance</Link>
      </div>
    </section>

    <!-- Beneficiaries Reports -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800">Beneficiary Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/reports/beneficiaries-by-program" class="report-link">Beneficiaries by Program</Link>
        <Link href="/reports/overall-beneficiaries" class="report-link">Overall Beneficiaries</Link>
      </div>
    </section>
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

<style scoped>
.report-link {
  @apply block p-6 bg-white rounded-lg shadow hover:shadow-md transition text-lg font-semibold text-center;
}
</style>
