// https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&contains=asd&amount=4

function generateFilters(state) {
  let filters = ``;
  const {
    category,
    blacklist,
    // type, language, search, limit
  } = state;
  if (category.length > 0) {
    let categories = category.join();
    filters = filters + `${categories}`;
  }
  if (blacklist.length > 0) {
    let blacklists = blacklist.join();
    filters = filters + `?blacklistFlags=${blacklists}`;
  }
  return filters;
}
export { generateFilters };
