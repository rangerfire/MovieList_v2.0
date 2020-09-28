import React from "react";
import Caro from "../Components/Carousel"

export default function homePage({ onPageChange }) {
  return (
    <React.Fragment>
      <header>Our Top Rated Movie List</header>
      <Caro />
    </React.Fragment>
  );
}
