import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    loading: false,
    jokes: [],
    categories: ["programming", "misc", "dark", "pun", "spooky", "christmas"],
    flags: ["nsfw", "relegious", "political", "racist", "sexist", "explicit"],
  },
  actions,
  getters,
  mutations,
};
