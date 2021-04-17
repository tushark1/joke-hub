<template>
  <div
    class="flex flex-col  space-y-6 border border-gray-200 dark:border-gray-500 rounded-xl p-4"
  >
    <div class="flex items-center space-x-4">
      <div>
        <p class="text-2xl font-medium text-gray-700 dark:text-gray-400">
          Filters
        </p>
      </div>
      <div>
        <button
          @click="expanded = !expanded"
          class="text-2xl font-medium text-gray-700 dark:text-gray-400 focus:outline-none"
        >
          {{ expanded ? "&uarr;" : "&darr;" }}
        </button>
      </div>
    </div>
    <div v-if="expanded" class="flex flex-col space-y-4 ">
      <div class="w-full flex flex-col space-y-2">
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-400">
          Category
        </p>
        <div class="flex items-start flex-wrap">
          <label
            v-for="category in categories"
            :key="`category-${category}`"
            class="inline-flex items-center mr-4 mb-2"
          >
            <input
              type="checkbox"
              class="rounded border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-400 shadow-sm focus:border-gray-500 dark:focus:border-gray-600 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50"
              :value="category"
              v-model="form.category"
            />
            <span class="ml-1 capitalize text-gray-700 dark:text-gray-400">{{
              category
            }}</span>
          </label>
        </div>
      </div>
      <div class="w-full flex flex-col space-y-2">
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-400">
          Blacklist
        </p>
        <div class="flex items-start flex-wrap">
          <label
            v-for="flag in flags"
            :key="`flag-${flag}`"
            class="inline-flex items-center mr-4 mb-2"
          >
            <input
              :value="flag"
              type="checkbox"
              class="rounded border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-400 shadow-sm focus:border-gray-500 dark:focus:border-gray-600 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50"
              v-model="form.blacklist"
            />
            <span class="ml-1 capitalize text-gray-700 dark:text-gray-400">{{
              flag
            }}</span>
          </label>
        </div>
      </div>
      <div class="w-full flex flex-col space-y-2">
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-400">
          Joke Type
        </p>
        <div class="flex items-start flex-wrap">
          <label class="inline-flex items-center mr-4 mb-2">
            <input
              value="single"
              type="checkbox"
              class="rounded border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-400 shadow-sm focus:border-gray-500 dark:focus:border-gray-600 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50"
              v-model="form.type"
            />
            <span class="ml-1 capitalize text-gray-700 dark:text-gray-400"
              >Single</span
            >
          </label>
          <label class="inline-flex items-center mr-4 mb-2">
            <input
              value="twopart"
              type="checkbox"
              class="rounded border-gray-300 dark:border-gray-500 text-gray-600 dark:text-gray-400 shadow-sm focus:border-gray-500 dark:focus:border-gray-600 focus:ring focus:ring-offset-0 focus:ring-gray-200 focus:ring-opacity-50"
              v-model="form.type"
            />
            <span class="ml-1 capitalize text-gray-700 dark:text-gray-400"
              >Two part</span
            >
          </label>
        </div>
      </div>
      <div>
        <button
          class="text-gray-700 dark:text-gray-400 border border-gray-700 dark:border-gray-500 rounded-xl focus:outline-none px-4 py-2"
          @click="applyFilters()"
        >
          Apply filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterComponent",
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    value: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      categories: ["joke/getCategories"],
      flags: ["joke/getFlags"],
    }),
    form: {
      get() {
        return this.value;
      },
      set(localValue) {
        this.$emit("input", localValue);
      },
    },
  },
  methods: {
    applyFilters() {
      this.$emit("filtersApplied");
    },
  },
};
</script>

<style></style>
