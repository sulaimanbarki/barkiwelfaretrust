<template>
  <div>
    <Head title="Expense Heads" />
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Expense Heads</h1>
      <Link class="btn-indigo" href="/expenseheads/create">
        <span>Create Expense Head</span>
      </Link>
    </div>

    <div class="bg-white rounded-lg shadow mb-6">
      <div class="p-4 border-b border-gray-200">
        <search-filter v-model="form.search" class="w-full" @reset="reset">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input 
                type="text" 
                v-model="form.search" 
                class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Search by name or description..."
              />
            </div>
            <div class="w-full md:w-1/4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select 
                v-model="form.trashed" 
                class="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option :value="null">Active</option>
                <option value="with">All</option>
                <option value="only">Deleted</option>
              </select>
            </div>
          </div>
        </search-filter>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="head in expense_heads.data" :key="head.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 text-sm text-gray-500">{{ head.id }}</td>
            <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ head.name }}</td>
            <td class="px-6 py-4 text-sm text-gray-900 max-w-md truncate">
              {{ head.description || 'No description' }}
            </td>
            <td class="px-6 py-4 text-right text-sm font-medium space-x-2">
              <div class="flex justify-end space-x-2">
                <Link :href="`/expenseheads/${head.id}`" class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md">
                  View
                </Link>
                <Link :href="`/expenseheads/${head.id}/edit`" class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md">
                  Edit
                </Link>
                <button @click="destroy(head)" class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md">
                  Delete
                </button>
                <button 
                  v-if="head.deleted_at" 
                  @click="restore(head)" 
                  class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md"
                >
                  Restore
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="expense_heads.data.length === 0">
            <td class="px-6 py-4 text-center text-gray-500" colspan="4">
              <div class="py-8">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <h3 class="mt-2 text-sm font-medium text-gray-900">No expense heads found</h3>
                <p class="mt-1 text-sm text-gray-500">Get started by creating a new expense head.</p>
                <div class="mt-6">
                  <Link href="/expenseheads/create" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Create Expense Head
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <pagination class="mt-2" :links="expense_heads.links" />
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'

export default {
  components: {
    Head,
    Link,
    Pagination,
    SearchFilter,
  },
  layout: Layout,
  props: {
    filters: Object,
    expense_heads: Object,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed,
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get('/expenseheads', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
    destroy(head) {
      if (confirm(`Are you sure you want to delete "${head.name}"?`)) {
        this.$inertia.delete(`/expenseheads/${head.id}`)
      }
    },
    restore(head) {
      this.$inertia.put(`/expenseheads/${head.id}/restore`)
    },
  },
}
</script>
