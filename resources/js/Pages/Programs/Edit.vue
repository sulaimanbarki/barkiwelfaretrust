<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head :title="`Edit Program - ${form.name}`" />
    <div class="flex items-center mb-8">
      <Link class="text-indigo-500 hover:text-indigo-700 font-medium" href="/programs">
        <span class="inline-flex items-center">
          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Programs
        </span>
      </Link>
    </div>
    
    <h1 class="mb-6 text-3xl font-bold text-gray-800">Edit Program: {{ form.name }}</h1>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="p-8 space-y-6">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Program Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter program name (e.g. Ramazan Package, Eid Gift, Qurbani, etc.)"
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
                placeholder="Enter program description"
              ></textarea>
              <p v-if="form.errors.description" class="mt-1 text-sm text-red-600">{{ form.errors.description }}</p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between px-8 py-4 bg-gray-50 border-t border-gray-200">
          <button
            v-if="!form.processing"
            type="button"
            @click="destroy"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Program
          </button>
          <div class="flex space-x-3">
            <Link 
              href="/programs" 
              class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </Link>
            <loading-button :loading="form.processing" class="btn-indigo" type="submit">
              Update Program
            </loading-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton,
  },
  layout: Layout,
  props: {
    program: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.program.name,
        description: this.program.description,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(`/programs/${this.program.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this program?')) {
        this.$inertia.delete(`/programs/${this.program.id}`)
      }
    },
  },
}
</script>

<style scoped>
.btn-indigo {
  @apply inline-flex px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
