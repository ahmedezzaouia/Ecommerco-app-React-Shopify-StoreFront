import React, { useContext } from "react";
import { Navbar, Cart, Home, Footer, ProductPage, BlogPage, AboutPage } from "./components";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GlobalProvider from "./contexts";

const App = React.memo(() => {
  console.log("app start");

  return (
    <GlobalProvider>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </GlobalProvider>
  );
});

export default App;
