export default {
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  jokesLoaded: (state, payload) => {
    state.jokes = JSON.parse(JSON.stringify(payload));
  },
};
