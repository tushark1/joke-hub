import { HttpClient } from "@/utils/HttpClient.js";
export default {
  async setLoading({ commit }, payload) {
    commit("setLoading", payload);
  },
  async pullJokes({ commit, dispatch }, { filters }) {
    const { category, blacklist, type, language, search, limit } = filters;
    try {
      dispatch("setLoading", true);
      let uri = "any";
      if (category.length > 0) {
        uri = `${category.join()}`;
      }
      const { data } = await HttpClient.get(`/joke/${uri}`, {
        params: {
          lang: language,
          blacklistFlags: blacklist.join(),
          contains: search || "",
          type: type.join() || "",
          amount: limit || 5,
        },
      });
      if (!data.error) {
        const { jokes } = data;
        commit("jokesLoaded", jokes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch("setLoading", false);
    }
  },
};
