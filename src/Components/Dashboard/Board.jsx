import React from "react";
import FilterBox from "./FilterBox";
import BoardSide from "./BoardSide";
import Header from "./Header";
import Footer from "./Footer";
import { createTheme,  ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();
export default function Board() {
  return (
     
      <ThemeProvider theme={defaultTheme}>
        <Header></Header>
        <br></br>
        <FilterBox></FilterBox>
        <BoardSide></BoardSide>
        <Footer></Footer>
      </ThemeProvider>
  );
}
