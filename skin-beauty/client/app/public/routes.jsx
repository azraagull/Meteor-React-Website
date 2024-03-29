import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home/home";
import { Blog } from "./pages/blog/blog";
import { ProductsPage } from "./pages/product/products";
import { SkinTypeTests } from "./pages/test/skinTypeTests";
import { SkinTypeTestDetail } from "./pages/test/skinTypeTestDetail";
import { ProductDetail } from "./pages/product/productDetail";
import { SignIn } from "../auth/pages/signIn/signIn";
import { SignUp } from "../auth/pages/signUp/signUp";
import { ForgotPassword } from "../auth/pages/forgotPassword/forgotPassword";

export const PublicLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="SkinTypeTests" element={<SkinTypeTests />} />
          <Route path="Product" element={<ProductsPage />} />
          <Route path="Product/:productId" element={<ProductDetail />} />
          <Route
            path="SkinTypeTests/:testId"
            element={<SkinTypeTestDetail />}
          />
          <Route  path="auth/signup" element={<SignUp />} />
          <Route  path="auth/signin" element={<SignIn />} />
          <Route  path="auth/forgotPassword" element={<ForgotPassword />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};