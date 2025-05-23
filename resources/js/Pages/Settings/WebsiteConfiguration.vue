<template>
  <div class="">
    <Head title="Website Configuration" />
    <h1 class="mb-8 text-3xl font-bold">Website Configuration</h1>

    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="submit" enctype="multipart/form-data">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input
            v-model="form.site_name"
            :error="form.errors.site_name"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Site Name"
          />
          <text-input
            v-model="form.contact_email"
            :error="form.errors.contact_email"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Contact Email"
          />
          <text-input
            v-model="form.contact_number"
            :error="form.errors.contact_number"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Contact Number"
          />
          <file-input
            v-model="form.logo"
            :error="form.errors.logo"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Logo"
          />
          <file-input
            v-model="form.favicon"
            :error="form.errors.favicon"
            class="pb-8 pr-6 w-full lg:w-1/2"
            label="Favicon"
          />
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">
            Save Configuration
          </loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import FileInput from '@/Shared/FileInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    TextInput,
    FileInput,
    LoadingButton,
  },
  layout: Layout,
  props: {
    config: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        site_name: this.config.site_name || '',
        contact_email: this.config.contact_email || '',
        contact_number: this.config.contact_number || '',
        logo: null,
        favicon: null,
      }),
    }
  },
  methods: {
    submit() {
      this.form.post('/settings/website', {
        preserveScroll: true,
      })
    },
  },
}
</script>
