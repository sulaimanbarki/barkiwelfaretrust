<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Create Role" />

    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/roles">Roles</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>

    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="submit">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <!-- Role Name -->
          <text-input
            v-model="form.name"
            :error="form.errors.name"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Role Name"
          />

          <!-- Permissions -->
          <div class="pb-8 pr-6 w-full">
            <label class="block text-gray-700 font-bold mb-2">Permissions</label>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div 
                v-for="permission in allPermissions"
                :key="permission.id"
                class="flex items-center space-x-2"
              >
                <input
                  v-model="form.permissions"
                  type="checkbox"
                  :value="permission.id"
                  class="form-checkbox h-5 w-5 text-indigo-600"
                  :id="`permission-${permission.id}`"
                />
                <label :for="`permission-${permission.id}`" class="text-sm text-gray-600">
                  {{ permission.name }}
                </label>
              </div>
            </div>

            <!-- Independent Permissions -->
            <div v-if="independentPermissions.length" class="mt-6">
              <label class="block text-gray-700 font-bold mb-2">Other Permissions</label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div 
                  v-for="permission in independentPermissions"
                  :key="permission.id"
                  class="flex items-center space-x-2"
                >
                  <input
                    v-model="form.permissions"
                    type="checkbox"
                    :value="permission.id"
                    class="form-checkbox h-5 w-5 text-indigo-600"
                    :id="`permission-independent-${permission.id}`"
                  />
                  <label :for="`permission-independent-${permission.id}`" class="text-sm text-gray-600">
                    {{ permission.name }}
                  </label>
                </div>
              </div>
            </div>

            <div v-if="form.errors.permissions" class="text-red-600 text-sm mt-2">
              {{ form.errors.permissions }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">
            Create Role
          </loading-button>
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
  layout: Layout,
  
  components: {
    Head,
    Link,
    TextInput,
    LoadingButton,
  },

  props: {
    menus: Array,
    independentPermissions: Array, // <-- Add this line
  },

  data() {
    return {
      form: this.$inertia.form({
        name: '',
        permissions: [],
      }),
    }
  },

  computed: {
    allPermissions() {
      return this.menus.flatMap(menu => menu.permissions)
    }
  },

  methods: {
    submit() {
      this.form.post('/roles')
    }
  }
}
</script>

<style scoped>
/* No extra style needed */
</style>
