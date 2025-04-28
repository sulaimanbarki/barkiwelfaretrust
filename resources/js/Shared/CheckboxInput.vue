<template>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input
        :id="name"
        :checked="isChecked"
        :type="type"
        :value="value"
        @change="handleChange"
        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        :class="{ 'border-red-300': error }"
      />
    </div>
    <div class="ml-3 text-sm">
      <label :for="name" class="font-medium text-gray-700">{{ label }}</label>
      <div v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'checkbox',
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isChecked() {
      if (this.type === 'checkbox' && Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue;
    },
  },
  methods: {
    handleChange(e) {
      let newValue;
      if (this.type === 'checkbox' && Array.isArray(this.modelValue)) {
        newValue = [...this.modelValue];
        if (e.target.checked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
      } else {
        newValue = e.target.checked;
      }
      this.$emit('update:modelValue', newValue);
    },
  },
}
</script>