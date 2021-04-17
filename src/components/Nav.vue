<template>
  <nav class="flex items-center w-full py-2">
    <div class="flex items-center flex-grow">
      <div
        class="bg-gray-800 dark:bg-gray-700 text-gray-200 text-2xl font-bold pl-4 pr-1 py-2 rounded-l-xl"
      >
        Joke
      </div>
      <div
        class="bg-gray-200 text-gray-800 text-2xl font-bold pl-1 pr-4 py-2 rounded-r-xl"
      >
        Hub
      </div>
    </div>
    <div>
      <button
        class="focus:outline-none border-2 rounded-xl h-8 w-8 flex items-center justify-center border-gray-200 text-gray-500 dark:border-yellow-300 dark:text-yellow-300"
        @click="toggleTheme()"
      >
        <svg
          v-if="theme === 'light'"
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
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          v-if="theme === 'dark'"
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavbarComponent",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ theme: ["theme/getTheme"] }),
  },
  methods: {
    toggleTheme() {
      switch (this.theme) {
        case "dark":
          this.$store.dispatch("theme/setTheme", { theme: "light" });
          break;
        case "light":
          this.$store.dispatch("theme/setTheme", { theme: "dark" });
          break;

        default:
          break;
      }
    },
  },
  watch: {
    theme: {
      immediate: true,
      handler(newTheme) {
        newTheme === "light"
          ? document.querySelector("html").classList.remove("dark")
          : document.querySelector("html").classList.add("dark");
      },
    },
  },
};
</script>

<style></style>
