<template>
  <div>
    <Head :title="`Program - ${program.name}`" />

    <!-- Back link -->
    <div class="flex items-center mb-8">
      <Link class="text-indigo-500 hover:text-indigo-700 font-medium" href="/programs">
        <span class="inline-flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Programs
        </span>
      </Link>
    </div>

    <!-- Program header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">{{ program.name }}</h1>
      <div class="flex space-x-2">
        <Link :href="`/programs/${program.id}/edit`" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit
        </Link>
        <button @click="destroy" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
          <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Delete
        </button>
      </div>
    </div>

    <!-- Program info -->
    <div class="bg-white rounded-lg shadow overflow-hidden mb-10">
      <div class="border-b border-gray-200">
        <dl>
          <div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium text-gray-500">Name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ program.name }}</dd>
          </div>
          <div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium text-gray-500">Description</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ program.description || 'No description provided' }}
            </dd>
          </div>
          <div class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium text-gray-500">Money Spent</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ program.total_amount || 'No money spent' }}
            </dd>
          </div>
          <div v-if="program.deleted_at" class="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="text-sm font-medium text-gray-500">Status</dt>
            <dd class="mt-1 sm:mt-0 sm:col-span-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"> Deleted </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Search + Transactions table -->
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Search:</label>
        <input v-model="form.search" class="form-input mt-1 w-full" placeholder="Search transactions..." />
      </search-filter>

      <!-- Add Transaction Button -->
      <button @click="showModal = true" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Add Transaction
      </button>
    </div>

    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Date</th>
            <th class="pb-4 pt-6 px-6">Amount</th>
            <th class="pb-4 pt-6 px-6">Beneficiary</th>
            <th class="pb-4 pt-6 px-6">Reference</th>
            <th class="pb-4 pt-6 px-6">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tx in transactions.data" :key="tx.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t px-6 py-4">{{ tx.transaction_date }}</td>
            <td class="border-t px-6 py-4">{{ tx.amount }}</td>
            <td class="border-t px-6 py-4">{{ tx.beneficiary?.full_name || '' }}</td>
            <td class="border-t px-6 py-4">{{ tx.reference_no }}</td>
            <td class="border-t px-6 py-4">{{ tx.description }}</td>
          </tr>
          <tr v-if="transactions.data.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No transactions found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination class="mt-6" :links="transactions.links" />

    <!-- Add Transaction Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">New Transaction</h2>
          <button @click="showModal = false" class="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>
        <form @submit.prevent="submitTransaction">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <input v-model="newTransaction.date" type="date" class="form-input mt-1 w-full" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Amount</label>
            <input v-model="newTransaction.amount" type="number" step="0.01" class="form-input mt-1 w-full" required />
          </div>

          <div class="mb-4">
            <select2-input v-model="newTransaction.beneficiary" :options="beneficiaries" :error="form.errors?.beneficiary" class="w-full" label="Beneficiary" />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Reference No</label>
            <input v-model="newTransaction.reference_no" class="form-input mt-1 w-full" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="newTransaction.description" class="form-input mt-1 w-full" rows="3"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="showModal = false" class="mr-2 px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
            <button type="submit" class="px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import SearchFilter from '@/Shared/SearchFilter.vue'
import Pagination from '@/Shared/Pagination.vue'
import Layout from '@/Shared/Layout.vue'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Select2Input from '@/Shared/Select2Input.vue'
import axios from 'axios'

export default {
  components: { Head, Link, SearchFilter, Pagination, Select2Input },
  layout: Layout,
  props: {
    program: Object,
    filters: Object,
    transactions: Object,
    beneficiaries: Array,
  },
  data() {
    const today = new Date().toISOString().split('T')[0]
    return {
      form: {
        search: this.filters.search || '',
      },
      showModal: false,
      newTransaction: {
        date: today,
        amount: '',
        beneficiary: '',
        reference_no: '',
        description: '',
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get(`/programs/${this.program.id}`, pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    destroy() {
      if (confirm('Are you sure you want to delete this program?')) {
        this.$inertia.delete(`/programs/${this.program.id}`)
      }
    },
    reset() {
      this.form = mapValues(this.form, () => '')
    },
    submitTransaction() {
      // Example: Replace with real API or Inertia post
      this.$inertia.post(`/programs/${this.program.id}/transactions`, this.newTransaction, {
        onSuccess: () => {
          this.showModal = false
          this.newTransaction = {
            date: '',
            amount: '',
            beneficiary: '',
            reference_no: '',
            description: '',
          }
        },
      })
    },
  },
}
</script>
