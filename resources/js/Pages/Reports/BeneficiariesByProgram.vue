<template>
  <div>
    <Head title="Beneficiaries by Program" />
    <h1 class="mb-8 text-3xl font-bold">Beneficiaries by Program</h1>

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
        <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Apply</button>
      </div>
    </form>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th class="px-4 py-3">Program</th>
            <th class="px-4 py-3">Total Beneficiaries</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in beneficiaries" :key="index" class="border-t">
            <td class="px-4 py-2">
              <Link :href="`/reports/beneficiaries-by-program/${item.program_id}/details`" class="text-blue-600 hover:underline">
                {{ item.program }}
              </Link>
            </td>
            <td class="px-4 py-2 text-green-700 font-semibold">
              <Link :href="`/reports/beneficiaries-by-program/${item.program_id}/details`" class="hover:underline">
                {{ item.total }}
              </Link>
            </td>
          </tr>
          <tr v-if="!beneficiaries.length">
            <td colspan="2" class="px-4 py-4 text-center text-gray-500">No data available for this period.</td>
          </tr>
        </tbody>

        <tfoot v-if="beneficiaries.length">
          <tr class="bg-gray-50 font-semibold border-t">
            <td class="px-4 py-3">Total</td>
            <td class="px-4 py-3 text-green-800">{{ totalBeneficiaries }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { Head, router, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    beneficiaries: Array,
    from: String,
    to: String,
  },
  components: {
    Head,
    Link,
  },
  data() {
    const now = new Date()
    const start = new Date(now.getFullYear(), now.getMonth(), 1)
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    const format = (d) => d.toISOString().split('T')[0]

    return {
      filters: {
        from: this.from && this.from.length > 0 ? this.from : format(start),
        to: this.to && this.to.length > 0 ? this.to : format(end),
      },
    }
  },
  computed: {
    totalBeneficiaries() {
      return this.beneficiaries.reduce((sum, b) => sum + Number(b.total), 0)
    },
  },
  methods: {
    applyFilter() {
      router.get('/reports/beneficiaries-by-program', this.filters, {
        preserveScroll: true,
        preserveState: true,
      })
    },
  },
  layout: Layout,
}
</script>
