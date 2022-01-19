import React from "react";
import { Products, Navbar, Cart, Home, Footer } from "./components";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CartContextProvider from "./contexts/cart";

const App = () => {
  return (
    <CartContextProvider>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </CartContextProvider>
  );
};

export default App;
