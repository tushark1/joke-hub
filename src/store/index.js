import Vue from "vue";
import Vuex from "vuex";
import JokesStore from "@/modules/jokes/store";
Vue.use(Vuex);

const debug = process.env.NODE_ENV != "production";
export default new Vuex.Store({
  modules: {
    joke: JokesStore,
    theme: {
      namespaced: true,
      state: {
        theme: localStorage.getItem("theme") || "light",
      },
      getters: {
        getTheme: (state) => state.theme,
      },
      mutations: {
        SET_THEME(state, payload) {
          localStorage.setItem("theme", payload);
          state.theme = payload;
        },
      },
      actions: {
        setTheme({ commit }, { theme }) {
          commit("SET_THEME", theme);
        },
      },
    },
  },
  strict: debug,
});
