import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#713ABE",
  secondary: "#D7BBF5",
  primaryLight: "#6528F7",
  primaryDark: "#5B0888",
  secondaryLight: "#EDE4FF",
  secondaryDark: "#9D76C1",

  //Standard colors
  white: "#fff",
  black: "#363636",
  grayLight: "#bdbdbd",
  grayDark: "#535353",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
    },
  },
  typography: {
    fontFamily: [
       "Barlow Condensed",
       "Roboto",
       "Helvetica",
       "Arial",
       "sans-serif",
    ].join(","),
    h1: {
       fontFamily: ["Bellefair", "serif"].join(","),
       fontSize: "150px",
    },
    h2: {
       fontFamily: ["Bellefair", "serif"].join(","),
       fontSize: "100px",
    },
    h3: {
       fontFamily: ["Bellefair", "serif"].join(","),
       fontSize: "56px",
    },
    h4: {
       fontFamily: ["Bellefair", "serif"].join(","),
       fontSize: "32px",
    },
    h5: {
       fontSize: "28px",
       letterSpacing: 4.75,
    },
    h6: {
       fontSize: "28px",
       fontFamily: ["Bellefair", "serif"].join(","),
    },
    body1: {
       letterSpacing: 2.5,
       lineHeight: 1.65,
    },
    body2: {
       letterSpacing: 1.5,
       fontSize: "16px",
    },
    subtitle1: {
       fontSize: "14px",
       letterSpacing: 2.35,
    },
    subtitle2: {
       fontSize: "16px",
       letterSpacing: 2.7,
    },
 },
 breakpoints: {
    values: {
       xs: 0,
       sm: 576,
       md: 768,
       lg: 1124,
       xl: 1440,
    },
 },
});

export default theme;

/*#ff7449
#26a69a*/
