<template>
  <div>
    <Head title="Overall Beneficiaries Report" />
    <h1 class="mb-8 text-3xl font-bold">Overall Beneficiaries Report</h1>

    <!-- Filters -->
    <form @submit.prevent="applyFilter" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium mb-1">From</label>
        <input type="date" v-model="filters.from" class="border px-3 py-2 rounded w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">To</label>
        <input type="date" v-model="filters.to" class="border px-3 py-2 rounded w-full" />
      </div>
      <Select2Input v-model="filters.beneficiary_id" :options="beneficiaries" option-label="full_name" option-value="id" label="Beneficiary" :allowClear="true" />
      <Select2Input v-model="filters.program_id" :options="programs" option-label="name" option-value="id" label="Program" :allowClear="true" />
      <div class="flex items-end">
        <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">Apply</button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Beneficiary</th>
            <th class="px-4 py-3">Program</th>
            <th class="px-4 py-3">Amount</th>
            <th class="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index" class="border-t">
            <td class="px-4 py-2">{{ transaction.transaction_date }}</td>
            <td class="px-4 py-2">{{ transaction.beneficiary?.full_name || 'N/A' }}</td>
            <td class="px-4 py-2">{{ transaction.program?.name || 'N/A' }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">{{ Number(transaction.amount).toLocaleString() }}</td>
            <td class="px-4 py-2">{{ transaction.description }}</td>
          </tr>
          <tr v-if="!transactions.length">
            <td colspan="5" class="px-4 py-4 text-center text-gray-500">No transactions found.</td>
          </tr>
        </tbody>
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
import Select2Input from '@/Shared/Select2Input.vue'

export default {
  components: {
    Head,
    Select2Input,
  },
  props: {
    transactions: Array,
    from: String,
    to: String,
    beneficiaries: Array,
    programs: Array,
    selectedBeneficiary: [String, Number],
    selectedProgram: [String, Number],
  },
  data() {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const today = new Date()

    const formatDate = (date) => date.toISOString().split('T')[0]

    return {
      filters: {
        from: this.from && this.from.length > 0 ? this.from : formatDate(startOfMonth),
        to: this.to && this.to.length > 0 ? this.to : formatDate(today),
        beneficiary_id: this.selectedBeneficiary || '',
        program_id: this.selectedProgram || '',
      },
    }
  },
  methods: {
    applyFilter() {
      router.get('/reports/overall-beneficiaries', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
    exportToPDF() {
      const query = new URLSearchParams(this.filters).toString()
      window.open(`/reports/overall-beneficiaries/export?${query}`, '_blank')
    },
  },
  layout: Layout,
}
</script>
