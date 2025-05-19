<template>
  <div>
    <Head title="Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Link href="/donors" class="block">
        <div class="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
          <h2 class="text-xl font-semibold">Total Donors</h2>
          <p class="text-3xl mt-2">{{ stats.donors }}</p>
        </div>
      </Link>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <Link href="/beneficiaries" class="block">
          <h2 class="text-xl font-semibold">Total Beneficiaries</h2>
          <p class="text-3xl mt-2">{{ stats.beneficiaries }}</p>
        </Link>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <Link href="/campaigns" class="no-underline">
          <h2 class="text-xl font-semibold">Total Campaigns</h2>
          <p class="text-3xl mt-2">{{ stats.campaigns }}</p>
        </Link>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <Link href="/programs" class="block">
          <h2 class="text-xl font-semibold">Total Programs</h2>
          <p class="text-3xl mt-2">{{ stats.programs }}</p>
        </Link>
      </div>


      <div class="p-6 bg-white rounded-lg shadow text-center">
        <Link href="/donations" class="no-underline">
          <h2 class="text-lg font-semibold">Total Donations</h2>
          <p class="text-2xl text-green-600 mt-2">{{ stats.donations.toLocaleString() }}</p>
        </Link>
      </div>
      <div class="p-6 bg-white rounded-lg shadow text-center">
        <Link href="/expenses" class="no-underline">
          <h2 class="text-lg font-semibold">Total Expenses</h2>
          <p class="text-2xl text-red-600 mt-2">{{ stats.expenses.toLocaleString() }}</p>
        </Link>
      </div>
      <div class="p-6 bg-white rounded-lg shadow text-center">
        <Link href="/donations" class="no-underline">
          <h2 class="text-lg font-semibold">Today's Donations</h2>
          <p class="text-2xl text-green-600 mt-2">{{ stats.today_donations.toLocaleString() }}</p>
        </Link>
      </div>
      <div class="p-6 bg-white rounded-lg shadow text-center">
        <Link href="/expenses" class="no-underline">
          <h2 class="text-lg font-semibold">Today's Expenses</h2>
          <p class="text-2xl text-red-600 mt-2">{{ stats.today_expenses.toLocaleString() }}</p>
        </Link>
      </div>
      
      <div class="p-6 bg-white rounded-lg shadow text-center">
        <Link href="/reports/current-balance" class="no-underline">
          <h2 class="text-lg font-semibold">Cash in Hand</h2>
          <p class="text-2xl text-red-600 mt-2">{{ stats.cash_in_hand.toLocaleString() }}</p>
        </Link>
      </div>

    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import { Link } from '@inertiajs/vue3'

export default {
  props: {
    stats: Object,
  },
  components: {
    Head,
    Link,
  },
  layout: Layout,
}
</script>
