import axios from "axios";
const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8070/auth/token", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error("Login error", error.response);
    throw error;
  }
};
const refreshToken = async () => {
  try {
    const response = await axios.post("http://localhost:8070/api/refresh", {
      refreshToken: localStorage.getItem("refreshToken"),
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data;
    localStorage.setItem("token", accessToken);
    if (newRefreshToken) {
      localStorage.setItem("refreshToken", newRefreshToken);
    }

    return accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const newToken = await refreshToken();
      error.config.headers["Authorization"] = `Bearer ${newToken}`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);

export { login, refreshToken };
