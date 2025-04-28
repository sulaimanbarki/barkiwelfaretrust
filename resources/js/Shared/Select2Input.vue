<template>
  <div>
    <label class="form-label" v-if="label">{{ label }}</label>
    <select 
      :value="modelValue" 
      ref="select" 
      class="form-select w-full"
    >
      <option :value="null">Select {{ label }}</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number, null],
    options: {
      type: Array,
      default: () => []
    },
    label: String,
    error: String,
  },
  emits: ['update:modelValue'],
  
  mounted() {
    this.initSelect2();
  },

  watch: {
    modelValue(newVal) {
      // Update Select2 when modelValue changes from parent
      $(this.$refs.select).val(newVal).trigger('change');
    },
    options() {
      // Reinitialize Select2 when options change
      this.$nextTick(() => {
        $(this.$refs.select).select2('destroy');
        this.initSelect2();
      });
    }
  },

  beforeUnmount() {
    $(this.$refs.select).select2('destroy');
  },

  methods: {
    initSelect2() {
      $(this.$refs.select)
        .select2({
          width: '100%',
          placeholder: this.label ? `Select ${this.label}` : 'Select an option'
        })
        .on('change', () => {
          this.$emit('update:modelValue', $(this.$refs.select).val());
        });
      
      // Set initial value
      if (this.modelValue !== null) {
        $(this.$refs.select).val(this.modelValue).trigger('change');
      }
    }
  }
}
</script>

<style>
/* Optional: You can style Select2 to match Tailwind more closely if you want */
.select2-container .select2-selection--single {
  height: 2.5rem !important;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem;
}
.select2-selection__rendered {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
