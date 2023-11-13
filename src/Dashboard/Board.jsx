import React from "react";
import FilterBox from "./FilterBox";
import BoardSide from "./BoardSide";
import Header from "./Header";
import PodsTable from "../Table/PodsTable";
export default function Board() {
  return (
    <>
      <Header></Header>
      <br></br>
      <FilterBox></FilterBox>
      <BoardSide></BoardSide>
    </>
  );
}
