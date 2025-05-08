<template>
  <div class="px-4 sm:px-6 lg:px-8"> <!-- Added horizontal padding for better edge spacing -->
    <Head title="Create Donor" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/donors">Donors</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden"> <!-- Removed max-w-3xl -->
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <!-- Your existing input fields remain the same -->
          <text-input v-model="form.full_name" :error="form.errors.full_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Full Name" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address" />
          
          <select2-input 
            v-model="form.country_id" 
            :options="countries" 
            :error="form.errors.country_id" 
            class="pb-8 pr-6 w-full lg:w-1/2" 
            label="Country"
            @change="fetchCities"
          />
          
          <select2-input 
            v-model="form.city_id" 
            :options="filteredCities" 
            :error="form.errors.city_id" 
            class="pb-8 pr-6 w-full lg:w-1/2" 
            label="City"
            :disabled="!form.country_id"
            :key="citySelectKey"
          />

          <select-input v-model="form.donor_type" :error="form.errors.donor_type" class="pb-8 pr-6 w-full lg:w-1/2" label="Donor Type">
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select-input>

          <text-input v-model="form.monthly_donation" :error="form.errors.monthly_donation" class="pb-8 pr-6 w-full lg:w-1/2" label="Monthly Donation (PKR)" type="number" />
        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Create Donor</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import Select2Input from '@/Shared/Select2Input.vue'
import axios from 'axios';

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    Select2Input,
  },
  layout: Layout,
  remember: 'form',
  props: {
    cities: Array,  // All cities from backend
    countries: Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        full_name: null,
        email: null,
        phone: null,
        address: null,
        city_id: null,
        country_id: null,
        donor_type: 'Individual',
        monthly_donation: 0,
      }),
      filteredCities: [],
      citySelectKey: 0, // Used to force re-render
    }
  },
  methods: {
    store() {
      this.form.post('/donors')
    },
    async fetchCities(countryId) {
      if (!countryId) {
        this.filteredCities = [];
        this.form.city_id = null;
        this.citySelectKey += 1; // Force re-render
        return;
      }

      try {
        const response = await axios.get(`/countries/${countryId}/cities`);
        this.filteredCities = response.data;
        this.form.city_id = null; // Reset city selection
        this.citySelectKey += 1; // Force re-render to update options
      } catch (error) {
        console.error('Error fetching cities:', error);
        this.filteredCities = [];
      }
    }
  },
  watch: {
    'form.country_id'(newVal) {
      this.fetchCities(newVal);
    }
  }
}
</script>