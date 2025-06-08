<template>
  <div>
    <Head title="Donations by Date" />
    <h1 class="mb-8 text-3xl font-bold">Donations by Date</h1>

    <!-- Date Range Filter (4-cols) -->
    <form @submit.prevent="applyFilter" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium mb-1">From</label>
        <input type="date" v-model="filters.from" class="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">To</label>
        <input type="date" v-model="filters.to" class="border rounded px-3 py-2 w-full" />
      </div>
      <div>
        <select2-input v-model="filters.payment_method_id" :options="paymentMethods" label="Payment Method" />
      </div>

      <div class="md:col-span-1 flex items-end">
        <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead>
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Payment Method</th>
            <th class="px-4 py-3">Total Donations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(donation, index) in donations" :key="index" class="border-t">
            <td class="px-4 py-2">{{ donation.transaction_date }}</td>
            <td class="px-4 py-2">{{ donation.payment_method_name || 'N/A' }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">
              {{ Number(donation.total).toLocaleString() }}
            </td>
          </tr>
        </tbody>

        <tfoot v-if="donations.length">
          <tr class="bg-gray-50 font-semibold border-t">
            <td class="px-4 py-3">Total</td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3 text-green-800">{{ totalDonations.toLocaleString() }}</td>
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
import Select2Input from '@/Shared/Select2Input.vue'

export default {
  props: {
    donations: Array,
    from: String,
    to: String,
    paymentMethods: Array,
    selectedPaymentMethodId: [String, Number, null],
  },
  components: {
    Head,
    Select2Input,
  },
  data() {
    return {
      filters: {
        from: this.from,
        to: this.to,
        payment_method_id: this.selectedPaymentMethodId,
      },
    }
  },
  computed: {
    totalDonations() {
      return this.donations.reduce((sum, d) => sum + Number(d.total), 0)
    },
  },
  methods: {
    applyFilter() {
      router.get('/reports/donations-by-date', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
    exportToPDF() {
      const query = new URLSearchParams(this.filters).toString()
      window.open(`/reports/donations-by-date/export?${query}`, '_blank')
    },
  },
  layout: Layout,
}
</script>
