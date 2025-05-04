<template>
  <div>
    <Head title="Donations" />
    <h1 class="mb-8 text-3xl font-bold">Donations</h1>
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Trashed:</label>
        <select v-model="form.trashed" class="form-select mt-1 w-full">
          <option :value="null" />
          <option value="with">With Trashed</option>
          <option value="only">Only Trashed</option>
        </select>
      </search-filter>
      <Link class="btn-indigo" href="/donations/create">
        <span>Create</span>
        <span class="hidden md:inline">&nbsp;Donation</span>
      </Link>
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Amount</th>
            <th class="pb-4 pt-6 px-6">Date</th>
            <th class="pb-4 pt-6 px-6">Payment Method</th>
            <th class="pb-4 pt-6 px-6">Purpose</th>
            <th class="pb-4 pt-6 px-6">Type</th>
            <th class="pb-4 pt-6 px-6">Type Name</th>
            <th class="pb-4 pt-6 px-6" colspan="2">Entity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="donation in donations.data" :key="donation.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t px-6 py-4">{{ donation.amount }}</td>
            <td class="border-t px-6 py-4">{{ donation.donation_date }}</td>
            <td class="border-t px-6 py-4">{{ donation.payment_method }}</td>
            <td class="border-t px-6 py-4">{{ donation.purpose || '-' }}</td>
            <td class="border-t px-6 py-4 capitalize">
              {{ donation.type?.split('\\').pop() || '-' }}
            </td>
            <td class="border-t px-6 py-4">
              {{ donation.type_name || '-' }}
            </td>

            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="`/donations/${donation.id}/edit`" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="donations.data.length === 0">
            <td class="px-6 py-4 border-t" colspan="7">No donations found.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="donations.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import Layout from '@/Shared/Layout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'

export default {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter,
  },
  layout: Layout,
  props: {
    filters: Object,
    donations: Object,
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
        this.$inertia.get('/donations', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
