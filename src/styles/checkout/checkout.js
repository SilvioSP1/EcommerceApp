import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import theme from "../theme/theme";

export const GridCheckout = styled(Grid)(() => ({
    height: "auto",
    flexWrap: "nowrap !important",
    justifyContent: "space-around",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
       padding: theme.spacing(3),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
      flexDirection: "column",
      alignItems: "center",
   },
    [theme.breakpoints.up("md")]: {
       padding: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
       padding: theme.spacing(8),
    },
}));

export const GridCheckoutInfo = styled(Grid)(() => ({
   minHeight: 320,
   minWidth: 320,
   maxWidth: 444,
   backgroundColor: theme.palette.grey[100],
   padding: theme.spacing(3),
   margin: theme.spacing(3),
   borderRadius: theme.spacing(2),
   boxShadow: theme.shadows[2],
   [theme.breakpoints.down("md")]: {
      maxWidth: "70%"
   },
}));

export const GridOrderSummary = styled(Grid)(() => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   boxShadow: theme.shadows[2],
   borderRadius: theme.spacing(2),
   maxHeight: 380,
   minWidth: 320,
   maxWidth: 444,
   margin: theme.spacing(3),
   overflowY: "scroll",
   padding: theme.spacing(2),
   [theme.breakpoints.down("md")]: {
      maxWidth: "70%"
   },
}));

export const GridImageContainer = styled(Grid)(() => ({
   borderBottom: `1px solid #0b0d17`,
   maxHeight: 150,
   paddingRight: theme.spacing(2),
   marginBottom: theme.spacing(2),
   overflow: "hidden",
}));


