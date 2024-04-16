import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, styled } from "@mui/material";
import { GridOrderSummary, GridImageContainer } from "../styles/checkout/checkout";
import theme from "../styles/theme/theme";

const OrderSummary = ({data}) => {
   const { cartProducts } = useSelector((state) => state.cart);
   return (
      <GridOrderSummary container item xs={12} md={5} lg={4}>
         <Typography component="h2" variant="h5">
            Order Summary
         </Typography>
         {cartProducts.map((item) => {
            const quantity = item.quantity;
            const { post_img, post_price, post_name } = item;
            return (
               <GridImageContainer
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
               >
                  <Grid
                     container
                     item
                     xs={12}
                     justifyContent="space-between"
                     sx={{height: "100%", display: "flex", alignItems: "center"}}
                  >
                     <Grid
                        item
                        sm={3}
                        height= "100%"
                        display= "flex"
                        alignItems= "center"
                        sx={{[theme.breakpoints.up("sm")]: {
                           display: "flex",
                        }}}
                     >
                        <div style={{height: "auto", width: "100%",}}>
                           <img
                              style={{height: "100%", width: "100%",}}
                              src={post_img}
                              alt={post_name}
                           />
                        </div>
                     </Grid>
                     <Grid
                        item
                        container
                        xs={12}
                        sm={9}
                        md={8}
                        sx={{paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2),}}
                     >
                        <Grid
                           item
                           container
                           direction="row"
                           alignItems="flex-start"
                           justifyContent="space-between"
                           sx={{marginLeft: theme.spacing(2),
                              [theme.breakpoints.up("sm")]: {
                                 marginLeft: theme.spacing(2),
                              },}}
                        >
                           <Typography variant="body2" color="initial">
                              {post_name.substring(0, 40)}...
                           </Typography>
                        </Grid>
                        <Grid
                           item
                           container
                           direction="row"
                           alignItems="center"
                           justifyContent="space-around"
                           wrap="wrap"
                           sx={{marginTop: theme.spacing(2),
                              [theme.breakpoints.up("sm")]: {
                                 marginTop: theme.spacing(4),
                              },}}
                        >
                           <Grid
                              container
                              direction="row"
                              item
                              xs={8}
                              justifyContent="space-around"
                           >
                              <Typography
                                 variant="subtitle2"
                                 color="initial"
                                 sx={{color: theme.palette.grey[600]}}
                              >
                                 {post_price} x {quantity}
                              </Typography>
                              <Typography variant="subtitle2" color="initial">
                                 {Math.round(post_price * quantity * 100) / 100}
                              </Typography>
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </GridImageContainer>
            );
         })}
         <Typography component="h6" variant="body1">
            Total: $ {data}
         </Typography>
      </GridOrderSummary>
   );
};

export default OrderSummary;