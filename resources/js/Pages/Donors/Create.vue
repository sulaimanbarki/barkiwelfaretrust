<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Create Donor" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/donors">Donors</Link>
      <span class="text-indigo-400 font-medium">/</span> Create
    </h1>
    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.full_name" :error="form.errors.full_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Full Name(required)" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone (optional)" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address (optional)" />

          <!-- Country Dropdown -->
          <select2-input v-model="form.country_id" :options="countries" :error="form.errors.country_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Country" />

          <!-- City Dropdown -->
          <select2-input v-model="form.city_id" :options="filteredCities" :error="form.errors.city_id" class="pb-8 pr-6 w-full lg:w-1/2" label="City" :disabled="!form.country_id" :key="citySelectKey" />

          <!-- Payment Method Dropdown -->
          <select-input v-model="form.payment_method" :error="form.errors.payment_method" class="pb-8 pr-6 w-full lg:w-1/2" label="Payment Method">
            <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
              {{ method.name }}
            </option>
          </select-input>

          <!-- Donor Type -->
          <select-input v-model="form.donor_type" :error="form.errors.donor_type" class="pb-8 pr-6 w-full lg:w-1/2" label="Donor Type">
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select-input>

          <text-input v-model="form.monthly_donation" :error="form.errors.monthly_donation" class="pb-8 pr-6 w-full lg:w-1/2" label="Monthly Donation (PKR) (required)" type="number" />
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit"> Create Donor </loading-button>
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
import axios from 'axios'

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
    cities: Array,
    countries: Array,
    paymentMethods: Array,
  },
  data() {
    const pakistan = this.countries.find((c) => c.name === 'Pakistan')
    const pakistaniCities = pakistan ? this.cities.filter((city) => city.country_id === pakistan.id) : []
    const peshawar = pakistaniCities.find((city) => city.name === 'Peshawar')

    const easyPaisa = this.paymentMethods.find((method) => method.name.toLowerCase() === 'easypaisa')

    return {
      form: this.$inertia.form({
        full_name: null,
        phone: null,
        address: null,
        country_id: pakistan ? pakistan.id : null,
        city_id: peshawar ? peshawar.id : null,
        donor_type: 'Individual',
        monthly_donation: 0,
        payment_method: easyPaisa ? easyPaisa.id : this.paymentMethods.length > 0 ? this.paymentMethods[0].id : null,
      }),
      filteredCities: [],
      citySelectKey: 0,
    }
  },
  mounted() {
    const pakistan = this.countries.find((c) => c.name === 'Pakistan')
    if (pakistan) {
      this.form.country_id = pakistan.id

      this.filteredCities = this.cities.filter((city) => city.country_id === pakistan.id)
      const peshawar = this.filteredCities.find((city) => city.name === 'Peshawar')

      if (peshawar) {
        this.form.city_id = peshawar.id
      }

      this.citySelectKey++ // To re-render city dropdown
    }
  },
  methods: {
    store() {
      this.form.post('/donors')
    },
    initializeDefaultCity() {
      // If Pakistan is selected but city is not set, try to set Peshawar
      if (this.form.country_id && !this.form.city_id) {
        // Find Pakistan in countries
        const pakistan = this.countries.find((c) => c.id === this.form.country_id)

        if (pakistan && pakistan.name === 'Pakistan') {
          // Filter cities for Pakistan
          const pakistaniCities = this.cities.filter((city) => city.country_id === pakistan.id)
          this.filteredCities = pakistaniCities

          // Find and set Peshawar
          const peshawar = pakistaniCities.find((city) => city.name === 'Peshawar')
          if (peshawar) {
            this.form.city_id = peshawar.id
            this.citySelectKey++
          }
        }
      }
    },
  },
  watch: {
    async 'form.country_id'(newVal) {
      if (!newVal) {
        this.filteredCities = []
        this.form.city_id = null
        this.citySelectKey += 1
        return
      }

      try {
        const response = await axios.get(`/countries/${newVal}/cities`)
        this.filteredCities = response.data

        const selectedCountry = this.countries.find((c) => c.id === newVal)
        if (selectedCountry?.name === 'Pakistan') {
          const peshawar = this.filteredCities.find((city) => city.name === 'Peshawar')
          this.form.city_id = peshawar ? peshawar.id : null
        } else {
          this.form.city_id = null
        }

        this.citySelectKey += 1
      } catch (error) {
        console.error('Error fetching cities:', error)
        this.filteredCities = []
        this.form.city_id = null
        this.citySelectKey += 1
      }
    },
  },
}
</script>
