<template>
  <div>
    <Head title="Payment Methods" />

    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Payment Methods</h1>
      <Link class="btn-indigo" href="/payment-methods/create">
        <span>Create Payment</span>
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
                class="form-input w-full"
                placeholder="Search by name..."
              />
            </div>
            <div class="w-full md:w-1/4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select v-model="form.trashed" class="form-select w-full">
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
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="method in paymentMethods.data" :key="method.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 text-sm text-gray-500">{{ method.id }}</td>
            <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ method.name }}</td>
            <td class="px-6 py-4 text-sm">
              <span :class="method.is_active ? 'text-green-600' : 'text-gray-400'">
                {{ method.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <Link :href="`/payment-methods/${method.id}`" class="btn-view">View</Link>
              <Link :href="`/payment-methods/${method.id}/edit`" class="btn-blue">Edit</Link>
              <button @click="destroy(method)" class="btn-red">Delete</button>
              <button v-if="method.deleted_at" @click="restore(method)" class="btn-green">Restore</button>
            </td>
          </tr>

          <tr v-if="paymentMethods.data.length === 0">
            <td colspan="4" class="text-center text-gray-500 py-10">No payment methods found.</td>
          </tr>
        </tbody>
      </table>

      <div class="bg-white px-4 py-3 border-t border-gray-200">
        <pagination :links="paymentMethods.links" />
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'
import throttle from 'lodash/throttle'
import pickBy from 'lodash/pickBy'
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
    paymentMethods: Object,
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
        this.$inertia.get('/payment-methods', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
    destroy(method) {
      if (confirm(`Are you sure you want to delete ${method.name}?`)) {
        this.$inertia.delete(`/payment-methods/${method.id}`)
      }
    },
    restore(method) {
      this.$inertia.put(`/payment-methods/${method.id}/restore`)
    }
  },
}
</script>

<style scoped>
.btn-indigo {
  @apply inline-flex items-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 text-sm;
}
.btn-view {
  @apply text-indigo-600 hover:text-indigo-900 px-3 py-1 rounded-md transition-colors;
}
.btn-blue {
  @apply text-blue-600 hover:text-blue-900 px-3 py-1 rounded-md transition-colors;
}
.btn-red {
  @apply text-red-600 hover:text-red-900 px-3 py-1 rounded-md transition-colors;
}
.btn-green {
  @apply text-green-600 hover:text-green-900 px-3 py-1 rounded-md transition-colors;
}
</style>
