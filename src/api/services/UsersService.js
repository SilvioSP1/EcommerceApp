import axiosPublic, { axiosPrivate } from "../axios";

class UsersService {
  static async getAllUsers() {
    const res = await axiosPublic.get("/api/User/getusers");
    return res.data;
  }

  static async getMe() {
    const res = await axiosPrivate.get("/auth/profile");
    return res.data;
  }

  static async getUser(token) {
    const res = await axiosPublic.get(`/api/User/getuser/${token}`);
    return res.data;
  }

}

export default UsersService;
