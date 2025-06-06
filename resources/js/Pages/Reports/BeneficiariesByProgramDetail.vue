<template>
  <div>
    <Head :title="`Beneficiaries - ${program.name}`" />
    <h1 class="mb-6 text-3xl font-bold">Beneficiaries – {{ program.name }}</h1>

    <!-- Filters -->
    <form @submit.prevent="applyFilter" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium mb-1">From</label>
        <input type="date" v-model="filters.from" class="border px-3 py-2 rounded w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">To</label>
        <input type="date" v-model="filters.to" class="border px-3 py-2 rounded w-full" />
      </div>
      <div class="flex items-end">
        <button class="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 w-full">Search</button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Beneficiary</th>
            <th class="px-4 py-3">Amount</th>
            <th class="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id" class="border-t">
            <td class="px-4 py-2">{{ transaction.transaction_date }}</td>
            <td class="px-4 py-2">{{ transaction.beneficiary?.full_name || 'N/A' }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">{{ Number(transaction.amount).toLocaleString() }}</td>
            <td class="px-4 py-2">{{ transaction.description }}</td>
          </tr>
          <tr v-if="!transactions.length">
            <td colspan="4" class="px-4 py-4 text-center text-gray-500">No transactions found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Export Button -->
    <div class="flex justify-end my-4">
      <button @click="exportToPDF" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Export to PDF
      </button>
    </div>
  </div>
</template>

<script>
import { Head, router } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    program: Object,
    transactions: Array,
    from: String,
    to: String,
  },
  data() {
    const today = new Date().toISOString().split('T')[0]
    return {
      filters: {
        from: this.from || '',
        to: this.to || today,
      },
    }
  },
  methods: {
    applyFilter() {
      router.get(`/reports/beneficiaries-by-program/${this.program.id}`, this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
    exportToPDF() {
      const query = new URLSearchParams(this.filters).toString()
      window.open(`/reports/beneficiaries-by-program/${this.program.id}/export?${query}`, '_blank')
    },
  },
  layout: Layout,
}
</script>
