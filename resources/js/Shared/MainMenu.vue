<template>
  <div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/">
        <icon name="dashboard" class="mr-2 w-4 h-4" :class="isUrl('') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Dashboard</div>
      </Link>
    </div>
    <!-- <div class="mb-4">
      <Link class="group flex items-center py-3" href="/organizations">
        <icon name="office" class="mr-2 w-4 h-4" :class="isUrl('organizations') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('organizations') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Organizations</div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/contacts">
        <icon name="users" class="mr-2 w-4 h-4" :class="isUrl('contacts') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('contacts') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Contacts</div>
      </Link>
    </div> -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/reports">
        <icon name="printer" class="mr-2 w-4 h-4" :class="isUrl('reports') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('reports') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Reports</div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/donors">
        <icon name="heart" class="mr-2 w-4 h-4" :class="isUrl('donors') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('donors') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Donors</div>
      </Link>
    </div>
    <!-- campaigns -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/campaigns">
        <icon name="flag" class="mr-2 w-4 h-4" :class="isUrl('campaigns') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('campaigns') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Campaigns</div>
      </Link>
    </div>
    <!-- donations -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/donations">
        <icon name="money" class="mr-2 w-4 h-4" :class="isUrl('donations') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('donations') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Donations</div>
      </Link>
    </div>
    
    <!-- beneficiaries -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/beneficiaries">
        <icon name="users" class="mr-2 w-4 h-4" :class="isUrl('beneficiaries') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('beneficiaries') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Beneficiaries</div>
      </Link>
    </div>
    <!-- programs -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/programs">
        <icon name="clipboard-list" class="mr-2 w-4 h-4" :class="isUrl('programs') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('programs') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Programs</div>
      </Link>
    </div>
    <!-- expenses -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/expenses">
        <icon name="money" class="mr-2 w-4 h-4" :class="isUrl('expenses') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('expenses') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Expenses</div>
      </Link>
    </div>
    

    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/roles">
        <icon name="shield" class="mr-2 w-4 h-4" :class="isUrl('roles') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('roles') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Roles</div>
      </Link>
    </div>
    <!-- payment-methods -->
    <div class="mb-4">
      <Link class="group flex items-center py-3" href="/payment-methods">
        <icon name="credit-card" class="mr-2 w-4 h-4" :class="isUrl('payment-methods') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('payment-methods') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Pay Methods</div>
      </Link>
    </div>

  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'

export default {
  components: {
    Icon,
    Link,
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1)
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length
    },
  },
}
</script>
