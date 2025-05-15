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
      <div class="md:col-span-1 flex items-end">
        <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Date</th>
            <th class="px-4 py-3">Total Donations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="donation in donations" :key="donation.date" class="border-t">
            <td class="px-4 py-2">{{ donation.date }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">
              {{ donation.total }}
            </td>
          </tr>
          <tr v-if="!donations.length">
            <td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td>
          </tr>
        </tbody>
        <tfoot v-if="donations.length">
          <tr class="bg-gray-50 font-semibold border-t">
            <td class="px-4 py-3">Total</td>
            <td class="px-4 py-3 text-green-800">{{ totalDonations.toLocaleString() }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { Head, router } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    donations: Array,
    from: String,
    to: String,
  },
  components: {
    Head,
  },
  data() {
    return {
      filters: {
        from: this.from,
        to: this.to,
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
  },
  layout: Layout,
}
</script>
