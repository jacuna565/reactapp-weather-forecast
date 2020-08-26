import axios from "axios";
import { server } from "./globals";
const logoutClient = axios.create({
  baseURL: server,
  timeout: 10000,
  params: {},
});

logoutClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

const getLogoutClient = () => {
  return logoutClient;
};

export default getLogoutClient;
