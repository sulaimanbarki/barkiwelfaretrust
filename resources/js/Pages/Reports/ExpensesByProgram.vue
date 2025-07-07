<template>
  <div>
    <Head title="Expenses by Program" />
    <h1 class="mb-8 text-3xl font-bold">Expenses by Program</h1>

    <!-- Filter -->
    <form @submit.prevent="applyFilter" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium mb-1">From</label>
        <input type="date" v-model="filters.from" class="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">To</label>
        <input type="date" v-model="filters.to" class="border rounded px-3 py-2 w-full" />
      </div>
      <div class="md:col-span-1 flex items-end">
        <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Apply
        </button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Program</th>
            <th class="px-4 py-3">Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(expense, index) in expenses" :key="index" class="border-t">
            <td class="px-4 py-2">{{ expense.program }}</td>
            <td class="px-4 py-2 text-red-700 font-semibold">
              {{ Number(expense.total).toLocaleString() }}
            </td>
          </tr>
          <tr v-if="!expenses.length">
            <td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td>
          </tr>
        </tbody>
        <tfoot v-if="expenses.length">
          <tr class="bg-gray-50 font-semibold border-t">
            <td class="px-4 py-3">Total</td>
            <td class="px-4 py-3 text-red-800">{{ totalExpenses.toLocaleString() }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    
    <!-- Export Button -->
    <div class="flex justify-end my-4">
      <button @click="exportToPDF" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export to PDF</button>
    </div>
  </div>
</template>

<script>
import { Head, router } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    expenses: Array,
    from: String,
    to: String,
  },
  components: {
    Head,
  },
  data() {
    const now = new Date()
    const start = new Date(now.getFullYear(), now.getMonth(), 1)
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    const formatDate = (date) => date.toISOString().split('T')[0]

    return {
      filters: {
        from: this.from || formatDate(start),
        to: this.to || formatDate(end),
      },
    }
  },
  computed: {
    totalExpenses() {
      return this.expenses.reduce((sum, e) => sum + Number(e.total), 0)
    },
  },
  methods: {
    applyFilter() {
      router.get('/reports/expenses-by-program', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
    exportToPDF() {
      const query = new URLSearchParams(this.filters).toString()
      window.open(`/reports/expenses-by-program/export?${query}`, '_blank')
    },
  },
  layout: Layout,
}
</script>
