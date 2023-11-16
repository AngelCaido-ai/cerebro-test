import axios, { AxiosError } from "axios";

export const request = axios.create({
  baseURL: '/api/',
  timeout: 6000,
  withCredentials: true,
});
