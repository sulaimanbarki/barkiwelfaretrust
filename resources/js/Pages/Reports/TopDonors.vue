<template>
  <div>
    <Head title="Top Donors" />
    <h1 class="mb-8 text-3xl font-bold">Top Donors</h1>

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
        <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply
        </button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Donor</th>
            <th class="px-4 py-3">Total Donations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(donor, index) in donors" :key="index" class="border-t">
            <td class="px-4 py-2">{{ donor.donor }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">
              {{ Number(donor.total).toLocaleString() }}
            </td>
          </tr>
          <tr v-if="!donors.length">
            <td colspan="2" class="px-4 py-4 text-center text-gray-500">No donors found in this period.</td>
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
    donors: Array,
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
      router.get('/reports/top-donors', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
  },
  layout: Layout,
}
</script>
