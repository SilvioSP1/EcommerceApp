import React, { useEffect } from "react";
import CheckoutInfo from "../components/CheckoutInfo";
import OrderSummary from "../components/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { GridCheckout } from "../styles/checkout/checkout";
import { useLocation } from "react-router-dom";

const Checkout = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const { pending } = useSelector((state) => state.cart);
   const { data } = location.state;
   // useEffect(() => {
   //    if (!pending) {
        
   //    }
   // }, [pending, dispatch]);
   return (
      <GridCheckout container>
         <OrderSummary data={data}/>
         <CheckoutInfo data={data}/>
      </GridCheckout>
   );
};

export default Checkout;