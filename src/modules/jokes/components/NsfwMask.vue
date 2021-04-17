<template>
  <div class="">
    <div
      v-if="value.masked"
      class="absolute inset-0 bg-gray-900 dark:bg-gray-500 opacity-20 z-0"
    ></div>
    <button
      v-if="value.masked"
      class="absolute inset-0 flex flex-col items-center justify-center text-gray-700 dark:text-gray-400 z-10 w-full"
      @click="unmask()"
    >
      <p class="text-xl font-semibold">NSFW</p>
      <p class="text-sm font-normal">Click to view</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "NsfwMaskComponent",
  data() {
    return {};
  },
  props: {
    value: {
      required: true,
      type: Object,
    },
  },
  computed: {},
  methods: {
    unmask() {
      this.$emit("unmaskContent");
    },
  },
};
</script>

<style></style>
