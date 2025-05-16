<template>
  <div>
    <Head title="Financial Summary" />
    <h1 class="mb-8 text-3xl font-bold">Financial Summary</h1>

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

    <!-- Summary Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Category</th>
            <th class="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 font-medium">Total Donations</td>
            <td class="px-4 py-2 text-green-700 font-semibold">{{ summary.donations.toLocaleString() }}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 font-medium">Total Expenses</td>
            <td class="px-4 py-2 text-red-700 font-semibold">{{ summary.expenses.toLocaleString() }}</td>
          </tr>
          <tr class="bg-gray-50 font-bold border-t">
            <td class="px-4 py-3">Net Balance</td>
            <td class="px-4 py-3" :class="summary.net >= 0 ? 'text-green-800' : 'text-red-800'">
              {{ summary.net.toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Head, router } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    summary: Object,
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

    const format = (d) => d.toISOString().split('T')[0]

    return {
      filters: {
        from: this.from || format(start),
        to: this.to || format(end),
      },
    }
  },
  methods: {
    applyFilter() {
      router.get('/reports/financial-summary', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
  },
  layout: Layout,
}
</script>
