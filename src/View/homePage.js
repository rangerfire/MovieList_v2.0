import React from "react";
import Caro from "./Carousel"
export default function homePage({ onPageChange }) {
  return (
    <React.Fragment>
      <h1>This is the home page</h1>
      <Caro />
    </React.Fragment>
  );
}
