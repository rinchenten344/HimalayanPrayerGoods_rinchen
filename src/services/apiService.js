// apiService.js

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshedToken = await refreshToken();
      localStorage.setItem("token", refreshedToken);
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);
