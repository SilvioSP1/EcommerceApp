import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Container,
} from "@mui/material";
import { MyButton } from "../styles/buttons/buttons";
import Loading from "./Loading";
import Error from "./Error";
import { Colors } from "../styles/theme/theme";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayProduct } from "../features/products/ProductsSlice";
import ProductsService from "../api/services/ProductsService";
import usePagination from "../hooks/usePagination"
import CartService from "../api/services/CartService";

function OrdersList() {

    const [reservations, setReservations] = useState()
    CartService.getReservationByUser()
        .then((data) => {
            setReservations(data)
        })
        .catch((error) => {
            console.log(error);
        })

    const handleClick = () => {

    }
  return (
    <Card sx={{ width: "100%", height: 150 }}>
        {(reservations)?.map(
            (reserv) => (
            <CardContent sx={{ width: "100%", height: 150, margin: "0 auto" }}>
                <Grid container>
                    <Grid item xs={12} sx={{display: "flex",justifyContent: "space-between"}}>
                        <Typography>
                            Numero de reserva: {reserv.res_id}
                        </Typography>
                        <Typography>
                            Fecha: 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex",justifyContent: "space-between"}}>
                        <Typography>
                            Monto:${reserv.res_total}
                        </Typography>
                        <Typography>
                            Estado:{}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:"right"}}>
                        <MyButton
                            sx={{marginTop: "2rem"}}
                            variant="contained"
                            onClick={() => handleClick()}
                            aria-label="Watch reserved">
                            View details
                        </MyButton>
                    </Grid>
                </Grid>
            </CardContent>
            )
        )}
    </Card>
  )
}

export default OrdersList