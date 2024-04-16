import { useSelector, useDispatch } from "react-redux";
import { removeAllProduct } from "../features/cart/CartSlice";
import { useEffect } from "react";

export const useAuthCart = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user.token) {
        dispatch(removeAllProduct());
        }
    }, [user.token, dispatch]);

    return !!user.token;
};