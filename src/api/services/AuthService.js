import axiosPublic from "../axios";

class AuthService {
  static async signUp(newUser) {
    const res = await axiosPublic.post("/api/Auth/signup", {
      ...newUser,
    });
    return res.data;
  }

  static async signIn(user_email, user_password) {
    const res = await axiosPublic.post("/api/Auth/signin", {
      user_email,
      user_password,
    });
    return res.data;
  }

  static async refreshTokens(token, refreshToken) {
    const res = await axiosPublic.post("/api/Auth/gettoken", {
      token,
      refreshToken
    });
    return res.data;
  }
}

export default AuthService;
