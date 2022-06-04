import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, HomePage } from "./index";

const Pages = () => {
  return (
    <div className="row">
      <div className="page">
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/cart" element={ <CartPage /> } />
        </Routes>
      </div>
    </div>
  );
}

export default Pages;