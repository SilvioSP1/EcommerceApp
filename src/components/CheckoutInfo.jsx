import React from "react";
import {
   styled,
   Typography,
   Button,
   Box,
   TextField,
} from "@mui/material";

// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GridCheckoutInfo } from "../styles/checkout/checkout";
import theme from "../styles/theme/theme";
import CartService from "../api/services/CartService";
import { removeAllProduct } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutInfo = ({data}) => {

   const cart = useSelector((state) => state.cart);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const pending = cart.stateCart

   const handleClick = async () => {
      console.log("apretado pa")
      await CartService.addToReservation({ res_total: data}, user.token)
         .then((data) => {
            for (const product of cart.cartProducts){
               console.log(product)
               CartService.addToCart({post_id: product.post_id, quantity: product.quantity, res_id: data.res_id}, user.token)
                  .then(() => {
                     dispatch(removeAllProduct())
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            }
            toast("Successful reservation")
         })
         .catch((error) => {
            console.log(error)
          })
      navigate("/")
   };

   return (
         <GridCheckoutInfo sx={{letterSpacing: 2}}
            item
            container
            direction="column"
            xs={12}
            md={5}
            lg={4}
         >
            <ToastContainer />
            <Typography component="h1" variant="h4">
               Checkout
            </Typography>

            <Box
               component="form"
               sx={theme.spacing(2)}
            >
               <TextField
                  required
                  fullWidth
                  type="text"
                  sx={theme.spacing(2)}
                  id="email"
                  label="Email"
                  name="email"
                  autoFocus
               />
               <TextField
                  required
                  fullWidth
                  sx={theme.spacing(2)}
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
               />
               <TextField
                  required
                  fullWidth
                  sx={theme.spacing(2)}
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
               />

               <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={theme.spacing(3)}
                  onClick={() => handleClick()}
                  // disabled={pending}
               >
                  <Typography variant="body1" sx={{letterSpacing: 2}}>
                     Checkout
                  </Typography>
               </Button>
            </Box>
         </GridCheckoutInfo>
   );
};

export default CheckoutInfo;