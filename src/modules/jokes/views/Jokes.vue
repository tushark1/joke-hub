<template>
  <div class="flex flex-col items-start md:items-center space-y-6 w-full">
    <div class="max-w-4xl w-full">
      <filters v-model="filters" @filtersApplied="pullJokes()"></filters>
    </div>
    <div
      class="flex flex-col space-y-6 p-4 border border-gray-200 dark:border-gray-500 shadow-sm rounded-xl max-w-4xl w-full"
      v-if="!loading"
    >
      <div class="flex items-center justify-between">
        <p class="text-3xl text-gray-600 dark:text-gray-400 font-medium">
          Jokes
        </p>
        <button
          class="text-gray-700 dark:text-gray-400 border border-gray-700 dark:border-gray-500 font-semibold focus:outline-none px-2 py-1 rounded-xl"
          @click="pullJokes()"
        >
          Load random
        </button>
      </div>

      <div
        class="overflow-hidden rounded-xl"
        v-for="joke in jokes"
        :key="joke.id"
      >
        <joke :joke="joke"></joke>
      </div>
    </div>
    <div class="animate-bounce" v-else>
      ....Loading
    </div>
  </div>
</template>

<script>
import Filters from "../components/Filters.vue";
import Joke from "../components/Joke.vue";
import { mapGetters } from "vuex";
export default {
  components: { Joke, Filters },
  name: "JokesComponent",
  data() {
    return {
      filters: {
        category: [],
        blacklist: [],
        type: [],
        search: "",
        language: "en",
        limit: 5,
      },
    };
  },
  computed: {
    ...mapGetters({ jokes: ["joke/getJokes"], loading: ["joke/getLoading"] }),
  },
  mounted() {
    if (this.jokes.length <= 0) {
      this.pullJokes();
    }
  },
  methods: {
    pullJokes() {
      this.$store.dispatch("joke/pullJokes", {
        filters: {
          category: this.filters.category,
          blacklist: this.filters.blacklist,
          type: this.filters.type,
          search: this.filters.search,
          language: this.filters.language,
          limit: this.filters.limit,
        },
      });
    },
  },
};
</script>

<style></style>
