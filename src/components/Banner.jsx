import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../styles/banner/banner";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="../images/banner5.jpeg" />
      <BannerContent>
        <Typography variant="h6">New collection</Typography>
        <BannerTitle variant="h4">Spring 2024</BannerTitle>
        <BannerDescription variant="subtitle">
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem
        </BannerDescription>
        <Link to={`/products`}>
            <BannerShopButton color="primary">Shop Now</BannerShopButton>
        </Link>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;