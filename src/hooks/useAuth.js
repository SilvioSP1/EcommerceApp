import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setTokensUser } from "../features/user/UserSlice";
import AuthService from "../api/services/AuthService" 

export const useAuth = () => {
  const { email, token, id, name } = useSelector((state) => state.user);

  return {
    isAuth: !!token,
    email,
    token,
    id,
    name,
  };
};

export const useAuthToken = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let result = false

  useEffect(() => {
    if (user.token) {
      const decoded = jwtDecode(user.token);
      const expirationDate = decoded.exp * 1000;
      const now = Date.now();
      console.log(new Date(now).toLocaleString(), new Date(expirationDate).toLocaleString());
      
      if (now > expirationDate) {
        const newTokens = AuthService.refreshTokens(user.token, user.refreshToken)
        dispatch(setTokensUser(newTokens))
        //dispatch(removeUser());
      }
      result = true;
    }
  }, [user.token, dispatch]);

  return result;
};


