import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/auth/Login";
import CreateLogin from "./pages/auth/CreateLogin";
import PrivateRoute from "./routes/PrivateRoute";
import PaginaProdutos from "./components/produtos/PaginaProdutos";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateLogin />} />
                      <Route path="/products" element={<PaginaProdutos />} />

          <Route element={<PrivateRoute />}>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
