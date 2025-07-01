<template>
  <div>
    <Head :title="`${program.name} - Pending Applications`" />
    
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/programs">Programs</Link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ program.name }}
      <span class="text-indigo-400 font-medium">/</span>
      Pending Applications
    </h1>

    <!-- Search and Add Button -->
    <div class="mb-6 flex justify-between items-center">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Search:</label>
        <input
          v-model="form.search"
          class="form-input mt-1 w-full"
          type="text"
          placeholder="Search by name or father name..."
        />
      </search-filter>
      <button @click="showModal = true" class="btn-indigo">
        <span>Add</span>
        <span class="hidden md:inline">&nbsp;Application</span>
      </button>
    </div>

    <!-- Applications Table -->
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Date</th>
            <th class="pb-4 pt-6 px-6">Name</th>
            <th class="pb-4 pt-6 px-6">Father Name</th>
            <th class="pb-4 pt-6 px-6">Address</th>
            <th class="pb-4 pt-6 px-6">Description</th>
            <th class="pb-4 pt-6 px-6">Status</th>
            <th class="pb-4 pt-6 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in applications.data" :key="application.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t px-6 py-4">{{ application.date }}</td>
            <td class="border-t px-6 py-4">{{ application.name }}</td>
            <td class="border-t px-6 py-4">{{ application.father_name }}</td>
            <td class="border-t px-6 py-4">{{ application.address }}</td>
            <td class="border-t px-6 py-4">{{ application.description || 'N/A' }}</td>
            <td class="border-t px-6 py-4">
              <span :class="application.is_active ? 'text-green-600' : 'text-red-600'">
                {{ application.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="border-t px-6 py-4 w-px">
              <div class="flex items-center gap-2">
                <button
                  @click="approveApplication(application)"
                  class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  @click="deleteApplication(application)"
                  class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="applications.data.length === 0">
            <td class="border-t px-6 py-4 text-center" colspan="7">No applications found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination class="mt-6" :links="applications.links" />

    <!-- Add Application Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">New Application</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>
        <form @submit.prevent="submitApplication">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <input v-model="newApplication.date" type="date" class="form-input mt-1 w-full" required />
            <div v-if="applicationForm.errors.date" class="text-red-600 text-sm mt-1">{{ applicationForm.errors.date }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="newApplication.name" type="text" class="form-input mt-1 w-full" required />
            <div v-if="applicationForm.errors.name" class="text-red-600 text-sm mt-1">{{ applicationForm.errors.name }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Father Name</label>
            <input v-model="newApplication.father_name" type="text" class="form-input mt-1 w-full" required />
            <div v-if="applicationForm.errors.father_name" class="text-red-600 text-sm mt-1">{{ applicationForm.errors.father_name }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Address</label>
            <textarea v-model="newApplication.address" class="form-input mt-1 w-full" rows="3" required></textarea>
            <div v-if="applicationForm.errors.address" class="text-red-600 text-sm mt-1">{{ applicationForm.errors.address }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="newApplication.description" class="form-input mt-1 w-full" rows="3"></textarea>
          </div>
          <div class="mb-4">
            <label class="flex items-center">
              <input v-model="newApplication.is_active" type="checkbox" class="form-checkbox" />
              <span class="ml-2">Active</span>
            </label>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" @click="closeModal" class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">Cancel</button>
            <loading-button :loading="applicationForm.processing" class="btn-indigo" type="submit">Save</loading-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'
import Pagination from '@/Shared/Pagination.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import { router } from '@inertiajs/vue3'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'

export default {
  components: {
    Head,
    Link,
    SearchFilter,
    Pagination,
    LoadingButton,
  },
  layout: Layout,
  props: {
    program: Object,
    applications: Object,
    filters: Object,
  },
  data() {
    return {
      form: {
        search: this.filters.search || '',
      },
      showModal: false,
      newApplication: {
        date: new Date().toISOString().split('T')[0],
        name: '',
        father_name: '',
        address: '',
        description: '',
        is_active: true,
      },
      applicationForm: this.$inertia.form({
        date: '',
        name: '',
        father_name: '',
        address: '',
        description: '',
        is_active: true,
      }),
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        router.get(`/programs/${this.program.id}/pending`, pickBy(this.form), {
          preserveState: true,
          replace: true,
        })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form.search = ''
    },
    closeModal() {
      this.showModal = false
      this.newApplication = {
        date: new Date().toISOString().split('T')[0],
        name: '',
        father_name: '',
        address: '',
        description: '',
        is_active: true,
      }
      this.applicationForm.clearErrors()
    },
    submitApplication() {
      this.applicationForm.date = this.newApplication.date
      this.applicationForm.name = this.newApplication.name
      this.applicationForm.father_name = this.newApplication.father_name
      this.applicationForm.address = this.newApplication.address
      this.applicationForm.description = this.newApplication.description
      this.applicationForm.is_active = this.newApplication.is_active

      this.applicationForm.post(`/programs/${this.program.id}/pending`, {
        onSuccess: () => {
          this.closeModal()
        },
      })
    },
    approveApplication(application) {
      if (confirm('Are you sure you want to approve this application?')) {
        router.patch(`/program-applications/${application.id}/approve`)
      }
    },
    deleteApplication(application) {
      if (confirm('Are you sure you want to delete this application?')) {
        router.delete(`/program-applications/${application.id}`)
      }
    },
  },
}
</script>
