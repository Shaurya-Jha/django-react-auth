import axios from "axios";

const BASEURL = "http://localhost:8000/";

const AxiosInstance = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = "Token " + token;
    } else {
      config.headers.Authorization = "";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("Token");
    }
  },
);

export default AxiosInstance;
