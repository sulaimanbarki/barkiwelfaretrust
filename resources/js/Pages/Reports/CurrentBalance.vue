<template>
  <div>
    <Head title="Current Balance" />
    <h1 class="text-3xl font-bold mb-6">Current Balance</h1>

    <div class="bg-white p-6 rounded shadow-md">
      <div class="text-lg mb-2">
        Total Inflows (Donations): 
        <strong class="text-green-600">{{ formattedIn }}</strong>
      </div>
      <div class="text-lg mb-2">
        Total Outflows (Expenses): 
        <strong class="text-red-600">{{ formattedOut }}</strong>
      </div>
      <hr class="my-4" />
      <div class="text-xl font-bold">
        Net Balance: 
        <span class="text-blue-700">{{ formattedBalance }}</span>
      </div>
    </div>
  </div>
</template>



<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  props: {
    in: Number,
    out: Number,
    balance: Number,
  },
  components: {
    Head,
  },
  computed: {
    formattedIn() {
      return this.in.toLocaleString()
    },
    formattedOut() {
      return this.out.toLocaleString()
    },
    formattedBalance() {
      return this.balance.toLocaleString()
    },
  },
  layout: Layout,
}
</script>

