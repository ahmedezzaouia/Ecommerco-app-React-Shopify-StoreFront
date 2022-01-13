import React from "react";
import { Products, Navbar, Cart } from "./components";
import Container from "@mui/material/Container";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CardTravelOutlined } from "@mui/icons-material";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
