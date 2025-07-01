<template>
  <div>
    <Head title="Programs" />
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Programs</h1>
      <Link class="btn-indigo" href="/programs/create">
        <span>Create Program</span>
      </Link>
    </div>

    <div class="bg-white rounded-lg shadow mb-6">
      <div class="p-4 border-b border-gray-200">
        <search-filter v-model="form.search" class="w-full" @reset="reset">
          <div class="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input type="text" v-model="form.search" class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Search by name or description..." />
            </div>
            <div class="w-full md:w-1/4">
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select v-model="form.trashed" class="form-select w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option :value="null">Active</option>
                <option value="with">All Programs</option>
                <option value="only">Deleted Programs</option>
              </select>
            </div>
          </div>
        </search-filter>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="program in programs.data" :key="program.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ program.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">{{ program.name }}</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900 max-w-md truncate">{{ program.description || 'No description' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                <div class="flex justify-end space-x-2">
                  <Link :href="`/programs/${program.id}`" class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors"> View </Link>
                  <Link :href="`/programs/${program.id}/pending`" class="text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-3 py-1 rounded-md transition-colors"> Pending List </Link>
                  <Link :href="`/programs/${program.id}/edit`" class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"> Edit </Link>
                  <button @click="destroy(program)" class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors">Delete</button>
                  <button v-if="program.deleted_at" @click="restore(program)" class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors">Restore</button>
                </div>
              </td>
            </tr>
            <tr v-if="programs.data.length === 0">
              <td class="px-6 py-4 text-center text-gray-500" colspan="4">
                <div class="py-8">
                  <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <h3 class="mt-2 text-sm font-medium text-gray-900">No programs found</h3>
                  <p class="mt-1 text-sm text-gray-500">Get started by creating a new program.</p>
                  <div class="mt-6">
                    <Link href="/programs/create" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span>Create a program</span>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <pagination class="mt-2" :links="programs.links" />
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
    programs: Object,
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
        this.$inertia.get('/programs', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
    destroy(program) {
      if (confirm(`Are you sure you want to delete ${program.name}?`)) {
        this.$inertia.delete(`/programs/${program.id}`)
      }
    },
    restore(program) {
      this.$inertia.put(`/programs/${program.id}/restore`)
    },
  },
}
</script>
