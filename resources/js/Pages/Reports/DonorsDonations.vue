<template>
  <div>
    <Head title="Donors and Donations" />
    <h1 class="text-3xl font-bold mb-6">Donors and Donations</h1>

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
      <div class="md:col-span-1">
        <select2-input v-model="filters.donor_ids" :options="donorOptions" :multiple="true" class="pb-8 pr-6 w-full" label="Select Donor(s)" placeholder="All Donors" />
      </div>
      <div class="md:col-span-1">
        <label class="block text-sm font-medium mb-1">&nbsp;</label>
        <button class="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 w-full">Search</button>
      </div>
    </form>

    <!-- Table -->
    <div class="bg-white rounded shadow overflow-x-auto">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Donor</th>
            <th class="px-4 py-3">Amount</th>
            <th class="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in transactions.data" :key="index" class="border-t">
            <td class="px-4 py-2">{{ item.transaction_date }}</td>
            <td class="px-4 py-2">{{ item.donor?.full_name ?? 'N/A' }}</td>
            <td class="px-4 py-2 text-green-600 font-semibold">{{ formatAmount(item.amount) }}</td>
            <td class="px-4 py-2">{{ item.description }}</td>
          </tr>
          <tr v-if="!transactions.data.length">
            <td colspan="4" class="px-4 py-4 text-center text-gray-500">No donations found.</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <Pagination :links="transactions.links" class="mt-4" />
    </div>

    <div class="flex justify-end my-4">
      <button @click="exportToPDF" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export to PDF</button>
    </div>
  </div>
</template>

<script>
import { Head, router } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import Pagination from '@/Shared/Pagination.vue'
import Select2Input from '@/Shared/Select2Input.vue'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

export default {
  components: {
    Head,
    Pagination,
    Select2Input, // Register the component
  },
  layout: Layout,
  props: {
    transactions: Object,
    donors: Array,
    from: String,
    to: String,
    selectedDonors: Array,
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
        donor_ids: this.selectedDonors || [],
      },
    }
  },
  computed: {
    donorOptions() {
      return this.donors.map((d) => ({
        id: d.id,
        name: d.full_name,
      }))
    },
  },
  methods: {
    applyFilter() {
      router.get('/reports/donors-donations', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
    formatAmount(value) {
      return Number(value).toLocaleString()
    },
    exportToPDF() {
      const doc = new jsPDF('landscape')
      doc.setFontSize(16)
      doc.text('Donations Report', 14, 20)

      const headers = [['Date', 'Donor', 'Amount', 'Description']]

      const rows = this.transactions.data.map((item) => [item.transaction_date, item.donor?.full_name || 'N/A', this.formatAmount(item.amount), item.description])

      autoTable(doc, {
        head: headers,
        body: rows,
        startY: 30,
        theme: 'striped',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [52, 152, 219] }, // optional blue header
      })

      doc.save('donations-report.pdf')
    },
  },
}
</script>
