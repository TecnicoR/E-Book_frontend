import axios from "axios";

export const apiHelper = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiHelper.interceptors.request.use((requestOptions) => {
  const token = localStorage.getItem("accessToken");
  const tempHeaders = { ...requestOptions?.headers };
  if (token) {
    tempHeaders["Authorization"] = `Bearer ${token}`;
  }
  requestOptions.headers = tempHeaders;
  return requestOptions;
});
