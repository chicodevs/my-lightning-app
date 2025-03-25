import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mempool.space/api/v1/lightning",
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
