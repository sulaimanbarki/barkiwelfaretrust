<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Create Expense Head" />
    <div class="flex items-center mb-8">
      <Link class="text-indigo-500 hover:text-indigo-700 font-medium" href="/expenseheads">
        <span class="inline-flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Expense Heads
        </span>
      </Link>
    </div>

    <h1 class="mb-6 text-3xl font-bold text-gray-800">Create Expense Head</h1>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter expense head name (e.g. Salaries, Utilities, Rent)"
              />
              <p v-if="form.errors.name" class="mt-1 text-sm text-red-600">{{ form.errors.name }}</p>
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                v-model="form.description"
                rows="4"
                class="form-textarea w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter description (optional)"
              ></textarea>
              <p v-if="form.errors.description" class="mt-1 text-sm text-red-600">{{ form.errors.description }}</p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-200">
          <Link 
            href="/expenseheads" 
            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
          >
            Cancel
          </Link>
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">
            Create Expense Head
          </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
  },
  layout: Layout,
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        name: '',
        description: '',
      }),
    }
  },
  methods: {
    store() {
      this.form.post('/expenseheads')
    },
  },
}
</script>

<style scoped>
.btn-indigo {
  @apply inline-flex px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
