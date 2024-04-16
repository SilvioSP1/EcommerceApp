import axios from "axios";

import { useAuth, useAuthToken } from "../hooks/useAuth";
import AuthService from "./services/AuthService";
import UsersService from "./services/UsersService";

//const BASE_URL = process.env.REACT_APP_BASE_URL;

const BASE_URL = "https://localhost:7072";

// const refreshAccess = async () => {
//   try {
//     const currentRefreshToken = localStorage.getItem("refresh");
//     const res = await AuthService.refreshTokens(currentRefreshToken);
//     const setAccessToken = useAuth.token
//     setAccessToken(res.data?.access_token);
//     localStorage.setItem("refresh", res.data?.refresh_token);
//     return res.data?.access_token;
//   } catch {
//     const signOut = useAuthStore.getState().signOut;
//     signOut();
//     localStorage.removeItem("refresh");
//   }
// };

const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});


// axiosPrivate.interceptors.request.use(
//   (config) => {
//     const auth = useAuthToken()
//     if (auth) {
//       const accessToken = useAuth().token;
//       UsersService.getUser(accessToken)
//         .then((data) => {
//           config.headers.Authorization = data.role;
//         })
//         .catch((err) => {
//            console.log(err);
//          })
//     }
//     return config;
//   },

//   (error) => Promise.reject(error),
// );

// axiosPrivate.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error?.config;

//     if (error?.response?.status === 401 && !originalRequest?._retry) {
//       originalRequest._retry = true;
//       const auth = useAuthToken()
//       if (auth) {
//         const accessToken = useAuth().token;
//         UsersService.getUser(accessToken)
//           .then((data) => {
//             originalRequest.headers.Authorization = data.role;
//           })
//           .catch((err) => {
//             console.log(err);
//           })
//       }
//       return axiosPrivate(originalRequest);
//     }
//     return Promise.reject(error);
//   },
// );

export default axiosPublic;
export { axiosPrivate };
