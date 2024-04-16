import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const Cart = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart | HomeHeaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div></div>
      <Footer></Footer>

    </div>
  );
};

export default Cart;
