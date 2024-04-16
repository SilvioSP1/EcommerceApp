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
import Loading from "./Loading";
import Error from "./Error";
import { Colors } from "../styles/theme/theme";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayProduct } from "../features/products/ProductsSlice";
import ProductsService from "../api/services/ProductsService";
import usePagination from "../hooks/usePagination"

const Products = ({filteredProducts}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // const { filteredProducts } = useSelector(
  //   (state) => state.products
  // );
  const { currentPage, totalPages, filteredCurrentPage, visibleItems, handlePageChange, handleFilteredPageChange } = usePagination(data, 10, filteredProducts);
  
  const fetchData = async () => {
    try {
      const products = await ProductsService.getProducts();
      setData(products);
      //console.log(products[0]); // Mover el console.log aquí para asegurarse de que se ejecute después de que se resuelva la promesa
      // Aquí puedes seguir trabajando con los datos si es necesario
    } catch (error) {
      console.error('Hubo un error al obtener los productos:', error);
      setError(error);
      dispatch(displayProduct(error.message));
    }
  }
  
  useEffect(() => {
    fetchData();
    setLoading(false)
    
  }, []);

  const dispatch = useDispatch();
  
  const ShowProducts = () => {
    return (
      <Grid container spacing={3} sx={{ mt: "2rem" }} justifyContent="center">
        {(visibleItems)?.map(
          (product) => (
            <Grid item key={product.post_id}>
              <Card sx={{ maxWidth: 500, width: 300, height: 400 }}>
                <CardActionArea
                  // onClick={() => dispatch(displayProduct(product))}
                >
                  <Link to={{ pathname: `/products/${product.post_id}`}} state={{ product, error, loading }}>
                    <CardMedia
                      sx={{ height: 250, width: 200, margin: "0 auto" }}
                      image={product.post_img}
                      title={product.post_name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: Colors.grayDark, mt: ".5rem" }}
                      >
                        {product.post_name.substring(0, 20)}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: Colors.black,
                          mt: "1rem",
                          fontWeight: "600",
                        }}
                      >
                        $ {product.post_price}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    );
  };

  return (
    <>
      <Container>
        {loading ? <Loading /> : error !== "" ? <Error /> : <ShowProducts />}
      </Container>
    </>
  );
};

export default Products;
