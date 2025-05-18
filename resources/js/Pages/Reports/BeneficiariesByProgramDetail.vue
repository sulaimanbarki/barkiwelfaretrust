<template>
  <div>
    <Head :title="`Beneficiaries - ${program.name}`" />
    <h1 class="mb-6 text-3xl font-bold">Beneficiaries – {{ program.name }}</h1>

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
          <tr v-for="transaction in transactions.data" :key="transaction.id" class="border-t">
            <td class="px-4 py-2">{{ transaction.transaction_date }}</td>
            <td class="px-4 py-2">{{ transaction.beneficiary?.full_name || 'N/A' }}</td>
            <td class="px-4 py-2 text-green-700 font-semibold">{{ Number(transaction.amount).toLocaleString() }}</td>
            <td class="px-4 py-2">{{ transaction.description }}</td>
          </tr>
          <tr v-if="!transactions.data.length">
            <td colspan="4" class="px-4 py-4 text-center text-gray-500">No transactions found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex justify-center">
      <Pagination :links="transactions.links" />
    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import Pagination from '@/Shared/Pagination.vue'

export default {
  props: {
    program: Object,
    transactions: Object,
  },
  components: {
    Head,
    Pagination,
  },
  layout: Layout,
}
</script>
