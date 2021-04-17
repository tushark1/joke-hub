<template>
  <div
    class="relative flex items-center border border-gray-200 dark:border-gray-500 shadow-sm px-4 py-2 rounded-xl w-full"
    v-if="type === 'single'"
  >
    <nsfw-mask v-model="maskModel" @unmaskContent="unmaskContent"></nsfw-mask>
    <div class="w-full" :class="maskJoke ? 'filter blur-sm' : null">
      <p
        class="font-mono font-medium text-gray-600 dark:text-gray-400 whitespace-pre-line"
      >
        {{ joke.joke }}
      </p>
      <div class="flex items-center w-full">
        <div class="flex-grow">
          <span
            class="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full px-2 py-px text-xs font-bold"
          >
            {{ joke.category }}
          </span>
          <span
            v-for="(flag, value) in joke.flags"
            :key="`flag-${value}-${joke.id}`"
          >
            <template v-if="flag">
              <span
                class="bg-red-300 dark:bg-red-700 text-red-700 dark:text-red-200 rounded-full px-2 py-px text-xs font-bold ml-2 capitalize"
              >
                {{ value }}</span
              >
            </template>
          </span>
        </div>
        <div class="flex items-center flex-shrink">
          <span
            v-if="copy_success"
            class="text-sm text-green-800 dark:text-green-400"
            >{{ copy_success }}</span
          >
          <button class="text-gray-600 dark:text-gray-400" @click="copyJoke()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative flex items-center border border-gray-200 dark:border-gray-500 shadow-sm px-4 py-2 rounded-xl w-full"
    v-else
  >
    <nsfw-mask v-model="maskModel" @unmaskContent="unmaskContent"></nsfw-mask>
    <div class="w-full" :class="maskJoke ? 'filter blur-sm' : null">
      <p
        class="font-mono font-medium text-gray-600 dark:text-gray-400 whitespace-pre-line"
      >
        {{ joke.setup }}
      </p>
      <p
        class="font-mono font-medium text-gray-600 dark:text-gray-400 whitespace-pre-line"
      >
        {{ joke.delivery }}
      </p>
      <div class="flex items-center w-full">
        <div class="flex-grow">
          <span
            class="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full px-2 py-px text-xs font-bold"
          >
            {{ joke.category }}
          </span>
          <span
            v-for="(flag, value) in joke.flags"
            :key="`flag-${value}-${joke.id}`"
          >
            <template v-if="flag">
              <span
                class="bg-red-300 dark:bg-red-700 text-red-700 dark:text-red-200 rounded-full px-2 py-px text-xs font-bold ml-2 capitalize"
              >
                {{ value }}</span
              >
            </template>
          </span>
        </div>
        <div class="flex items-center flex-shrink">
          <span
            v-if="copy_success"
            class="text-sm text-green-800 dark:text-green-400"
            >{{ copy_success }}</span
          >
          <button class="text-gray-600 dark:text-gray-400" @click="copyJoke()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NsfwMask from "./NsfwMask.vue";
export default {
  components: { NsfwMask },
  name: "JokeComponent",
  data() {
    return {
      expanded: false,
      hidden: true,
      copy_success: "",
    };
  },
  props: {
    joke: {
      required: true,
      type: Object,
    },
  },
  computed: {
    type() {
      return this.joke.type;
    },
    maskJoke() {
      return this.joke.flags.nsfw && this.hidden;
    },
    maskModel() {
      return {
        hidden: this.hidden,
        masked: this.maskJoke,
      };
    },
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    },
    unmaskContent() {
      this.hidden = false;
    },
    copyJoke() {
      let jk = this.joke;
      if (jk.type === "single") {
        navigator.clipboard.writeText(jk.joke);
      } else {
        let clipBoardText = `${jk.setup} \n ${jk.delivery}`;
        navigator.clipboard.writeText(clipBoardText);
      }
      this.copy_success = "Joke copied to clipboard!";
      setTimeout(() => {
        this.copy_success = "";
      }, 1000);
    },
  },
};
</script>

<style></style>
