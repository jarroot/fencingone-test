import axios from "axios";

const API = axios.create({
   baseURL: process.env.REACT_APP_API_URL
});

API.interceptors.request.use( config => {
   const username = "Webclient";
   const password = "Yogi543";

   const token = btoa(`${ username }:${ password }`);

   config.headers.Authorization = `Basic ${ token }`;
   return config;
});

export default API;