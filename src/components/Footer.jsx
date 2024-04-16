import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { Colors } from "../styles/theme/theme";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.primary,
        color: "white",
        width: "100%",
      }}
    >
      <Box sx={{ padding: "2.5rem 2rem 2rem" }}>
        <Grid container spacing={2} justifyContent="center" 
        alignItems="center" direction="column">
        <Grid item>
            <Typography fontSize="1.5rem">
               About
            </Typography>
        </Grid>
        <Grid item>
            <Link href="mailto:chinaemerema@gmail.com" target="_blank">
               <IconButton>
                  <EmailIcon sx={{color:"white", fontSize:"1.5rem"}}/>
               </IconButton>
            </Link>
            <Link href="https://github.com/AgomohC" target="_blank">
               <IconButton>
                  <GitHubIcon sx={{color:"white", fontSize:"1.5rem"}}/>
               </IconButton>
            </Link>
            <Link href="https://twitter.com/femto_ace" target="_blank">
               <IconButton>
                  <TwitterIcon sx={{color:"white", fontSize:"1.5rem"}}/>
               </IconButton>
            </Link>
         </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: Colors.primaryDark,
          padding: ".8rem",
          textAlign: "center",
        }}
      >
        © 2024 All Rights Reserved Terms of Use and Private Policy
      </Box>
    </Box>
  );
};

export default Footer;
