<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <Head title="Edit Expense" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/expenses">Expenses</Link>
      <span class="text-indigo-400 font-medium">/</span> Edit
    </h1>

    <div class="bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <select-input v-model="form.type" :error="form.errors.type" class="pb-8 pr-6 w-full lg:w-1/2" label="Expense Type" disabled>
            <option value="beneficiary">Beneficiary</option>
            <option value="program">Program</option>
            <option value="general_expense">General Expense</option>
          </select-input>

          <select2-input v-model="form.type_id" :options="typeOptions" :error="form.errors.type_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Select Beneficiary or Program" :key="entitySelectKey" />

          <text-input v-model="form.amount" :error="form.errors.amount" class="pb-8 pr-6 w-full lg:w-1/2" label="Amount (PKR)" type="number" />

          <text-input v-model="form.transaction_date" :error="form.errors.transaction_date" class="pb-8 pr-6 w-full lg:w-1/2" label="Expense Date" type="date" />

          <select-input v-model="form.payment_method" :error="form.errors.payment_method" class="pb-8 pr-6 w-full lg:w-1/2" label="Payment Method">
            <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
              {{ method.name }}
            </option>
          </select-input>

          <text-input v-model="form.reference_no" :error="form.errors.reference_no" class="pb-8 pr-6 w-full lg:w-1/2" label="Reference No" />

          <text-input v-model="form.description" :error="form.errors.description" class="pb-8 pr-6 w-full lg:w-full" label="description" />
        </div>

        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!expense.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete Expense</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit"> Update Expense </loading-button>
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
  props: {
    beneficiaries: Array,
    programs: Array,
    expense: Object,
    paymentMethods: Array,
    expenseHeads: Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        type: this.expense.type,
        type_id: this.expense.type_id,
        amount: this.expense.amount,
        transaction_date: this.expense.transaction_date,
        payment_method: this.expense.payment_method,
        reference_no: this.expense.reference_no,
        description: this.expense.description,
      }),
      entitySelectKey: 0,
    }
  },
  computed: {
    typeOptions() {
      // return this.form.type === 'beneficiary' ? this.beneficiaries.map((b) => ({ id: b.id, name: b.full_name })) : this.programs.map((p) => ({ id: p.id, name: p.name }))
      // typeoptions should be beneficiary, program, and general_expense
      if (this.form.type === 'beneficiary') {
        return this.beneficiaries.map((b) => ({ id: b.id, name: b.full_name }))
      } else if (this.form.type === 'program') {
        return this.programs.map((p) => ({ id: p.id, name: p.name }))
      } else if (this.form.type === 'general_expense') {
        return this.expenseHeads.map((e) => ({ id: e.id, name: e.name }))
      }
    },
  },
  methods: {
    update() {
      this.form.put(`/expenses/${this.expense.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this expense?')) {
        this.$inertia.delete(`/expenses/${this.expense.id}`)
      }
    },
  },
}
</script>
