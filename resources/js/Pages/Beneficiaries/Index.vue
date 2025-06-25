<template>
  <div>
    <Head title="Beneficiaries" />
    <h1 class="mb-8 text-3xl font-bold">Beneficiaries</h1>
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Trashed:</label>
        <select v-model="form.trashed" class="form-select mt-1 w-full">
          <option :value="null" />
          <option value="with">With Trashed</option>
          <option value="only">Only Trashed</option>
        </select>
      </search-filter>
      <Link class="btn-indigo" href="/beneficiaries/create">
        <span>Create</span>
        <span class="hidden md:inline"> Beneficiary</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Full Name</th>
            <th class="pb-4 pt-6 px-6">Father/Husband Name</th>
            <th class="pb-4 pt-6 px-6">Phone</th>
            <th class="pb-4 pt-6 px-6">CNIC</th>
            <th class="pb-4 pt-6 px-6">Address</th>
            <th class="pb-4 pt-6 px-6">Res. Address</th>
            <th class="pb-4 pt-6 px-6" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="b in beneficiaries.data" :key="b.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/beneficiaries/${b.id}/edit`">
                {{ b.full_name }}
              </Link>
            </td>
            <td class="border-t px-6 py-4">{{ b.father_name }}</td>
            <td class="border-t px-6 py-4">{{ b.phone }}</td>
            <td class="border-t px-6 py-4">{{ b.cnic_num }}</td>
            <td class="border-t px-6 py-4">{{ b.address }}</td>
            <td class="border-t px-6 py-4">{{ b.permanent_address }}</td>
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="`/beneficiaries/${b.id}/edit`">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="beneficiaries.data.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No beneficiaries found.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="beneficiaries.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Layout from '@/Shared/Layout.vue'

export default {
  components: { Head, Link, Icon, Pagination, SearchFilter },
  layout: Layout,
  props: { filters: Object, beneficiaries: Object },
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
        this.$inertia.get('/beneficiaries', pickBy(this.form), { preserveState: true });
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    },
  },
}
</script>