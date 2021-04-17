import Axios from "axios";

const HttpClient = Axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
  },
});

function errorResponseHandler(error) {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // Cookies.remove("access_token");
        // store.dispatch("auth/attemptLogout");
        break;

      default:
        break;
    }
  }
  return Promise.reject(error);
}

// apply interceptor on response
HttpClient.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export { HttpClient };
