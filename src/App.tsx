import React from "react";
import { Products, Navbar, Cart, Home, Footer } from "./components";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
