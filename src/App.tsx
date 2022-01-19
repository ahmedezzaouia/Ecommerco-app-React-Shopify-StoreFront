import React from "react";
import { Products, Navbar, Cart, Home, Footer } from "./components";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import GlobalContextProvider from "./contexts/globalContext";

const App = React.memo(() => {
  console.log("app start");
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  );
});

export default App;
