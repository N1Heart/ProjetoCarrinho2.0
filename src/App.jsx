// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Login from "./pages/auth/Login";
import CreateLogin from "./pages/auth/CreateLogin";
import PrivateRoute from "./routes/PrivateRoute";

import PaginaProdutos from "./components/produtos/PaginaProdutos";
import ProductCreate from "./pages/products/ProductCreate";
import ProductUpdate from "./pages/products/ProductUpdate";
import ProductDelete from "./pages/products/ProductDelete";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateLogin />} />
                      <Route path="/products/create" element={<ProductCreate />} />

          <Route element={<PrivateRoute />}>
            <Route path="/products" element={<PaginaProdutos />} />
            <Route path="/products/update/:id" element={<ProductUpdate />} />
            <Route path="/products/delete/:id" element={<ProductDelete />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
