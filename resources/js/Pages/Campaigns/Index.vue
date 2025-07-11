<template>
  <div>
    <Head title="Campaigns" />
    <h1 class="mb-8 text-3xl font-bold">Campaigns</h1>

    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Trashed:</label>
        <select v-model="form.trashed" class="form-select mt-1 w-full">
          <option :value="null" />
          <option value="with">With Trashed</option>
          <option value="only">Only Trashed</option>
        </select>
      </search-filter>
      <Link class="btn-indigo" href="/campaigns/create" v-if="$can('create-campaign')">
        <span>Create</span>
        <span class="hidden md:inline">&nbsp;Campaign</span>
      </Link>
    </div>

    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Title</th>
            <th class="pb-4 pt-6 px-6">Start Date</th>
            <th class="pb-4 pt-6 px-6">End Date</th>
            <th class="pb-4 pt-6 px-6">Target</th>
            <th class="pb-4 pt-6 px-6" colspan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="campaign in campaigns.data" :key="campaign.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/campaigns/${campaign.id}/edit`">
                {{ campaign.title }}
                <icon v-if="campaign.deleted_at" name="trash" class="shrink-0 ml-2 w-3 h-3 fill-gray-400" />
              </Link>
            </td>
            <td class="border-t px-6 py-4">{{ campaign.start_date }}</td>
            <td class="border-t px-6 py-4">{{ campaign.end_date }}</td>
            <td class="border-t px-6 py-4">Rs. {{ campaign.target_amount }}</td>
            <td class="border-t px-6 py-4 capitalize">{{ campaign.status }}</td>
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="`/campaigns/${campaign.id}/edit`" tabindex="-1" v-if="$can('edit-campaign')">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="campaigns.data.length === 0">
            <td class="px-6 py-4 border-t" colspan="6">No campaigns found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <pagination class="mt-6" :links="campaigns.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'
import Layout from '@/Shared/Layout.vue'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'

export default {
  components: {
    Head,
    Link,
    Icon,
    Pagination,
    SearchFilter,
  },
  layout: Layout,
  props: {
    filters: Object,
    campaigns: Object,
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
        this.$inertia.get('/campaigns', pickBy(this.form), { preserveState: true })
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
