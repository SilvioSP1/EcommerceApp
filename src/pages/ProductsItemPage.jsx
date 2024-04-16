import { useState, useEffect } from "react";
import { useLocation, useParams  } from 'react-router-dom';
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../features/cart/CartSlice";
import { useAuth } from "../hooks/useAuth";
import {
  Box,
  Stack,
  CardMedia,
  Typography,
  Container,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { AmountButtons } from "../styles/buttons/buttons";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";
import ProductsService from "../api/services/ProductsService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsItemPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  
  //const { error, loading, product} = location.state ? location.state : null;

  useEffect(() => {
    if(location.state){
      setProduct(location.state.product);
      setLoading(location.state.loading);
      setError(location.state.error);
    }else{
      const fetchData = async (id) => {
        try {
          const products = await ProductsService.getProductById(id);
          setProduct(products);
          setError("")
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
      fetchData(id);
    }
  }, []);
  const productDetails = product

  //const { error, loading, product } = useSelector((state) => state.products);
  const { cartProducts } = useSelector((state) => state.cart);
  const productQuantity = cartProducts?.find((item) => item.post_id === product.post_id);
  const quantity = productQuantity?.quantity;

  useEffect(() =>{
    product.post_stock === quantity ? setDisabled(true) : setDisabled(false);
  },[])

  const notify = () => toast("No stock");


  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Link to="/login">
        <Button color="primary" size="small" onClick={handleClose}>
          log in
        </Button>
      </Link>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error !== "" ? (
        <Error />
      ) : (
        <PageContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              sx={{
                width: { xs: 300, md: 1000 },
                height: { xs: 400, md: 450 },
                margin: "0 auto",
                mb: { xs: "2rem" },
                marginRight: { md: "3.5rem" },
              }}
              image={product.post_img}
            />
            <Box sx={{ width: { xs: "90vw", md: "80vw" } }}>
              <Typography
                variant="h6"
                sx={{ color: Colors.primary, mb: "1rem" }}
              >
                {product.category_name}
              </Typography>
              <Typography variant="h5" sx={{ mb: "1rem" }}>
                {product.post_name}
              </Typography>
              <Typography variant="h6" sx={{ mb: "1rem" }}>
                Rating {product.rating && product.rating.rate}
              </Typography>
              <Typography variant="body1" sx={{ mb: "2rem" }}>
                {product.post_description}
              </Typography>
              <Typography variant="h4" sx={{ mb: "1.5rem" }}>
                ${product.post_price}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {quantity ? (
                  <AmountButtons>
                    <RemoveIcon
                      onClick={() => dispatch(deleteProduct(product))}
                      aria-label="Remove one unit"
                    />
                    <Typography>{quantity ? quantity : 0}</Typography>
                    {disabled ? (
                      <AddIcon
                        onClick={notify}
                        aria-label="Add one unit"
                      />
                    ): (
                      <AddIcon
                      onClick={() => dispatch(addProduct(product))}
                      aria-label="Add one unit"
                    />
                    )}
                  </AmountButtons>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() =>
                      isAuth ? dispatch(addProduct(product)) : handleClick()
                    }
                    aria-label="Buy"
                  >
                    Buy
                  </Button>
                )}

                <Link to={"/cart"} aria-label="Go to Cart" >
                  <Button variant="contained" sx={{ marginLeft: "1rem" }}>
                    Go to Cart
                  </Button>
                </Link>
              </Box>
              <ToastContainer />
            </Box>
          </Box>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="To add an item to your cart, you need to"
            action={action}
            anchorOriginBottomLeft
          />
        </PageContainer>
      )}
    </>
  );
};

export default ProductsItemPage;
