import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

// Páginas
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";
import Materiais from "./pages/Materiais/Materiais";
import Entrar from "./pages/Entrar/Entrar";
import Carrinho from "./pages/Carrinho/Carrinho";
import Conta from "./pages/Conta/Conta";
import Parcerias from "./pages/Parcerias/Parcerias";
import Comprar from "./pages/Comprar/Comprar";
import Comprar2 from "./pages/Comprar2/Comprar2";
import Comprar3 from "./pages/Comprar3/Comprar3";
import Pagamentos from "./pages/Pagamentos/Pagamentos";
import Endereço from "./pages/Endereço/Endereço";
import Compras from "./pages/Compras/Compras";

// Contextos
import { AuthProvider } from "./contexts/AuthContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/arqtech-projetointegrador">
      {/* Contextos globais */}
      <AuthProvider>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/Cadastrar" element={<Cadastrar />} />
            <Route path="/Materiais" element={<Materiais />} />
            <Route path="/Entrar" element={<Entrar />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Conta" element={<Conta />} />
            <Route path="/Parcerias" element={<Parcerias />} />
            <Route path="/Comprar" element={<Comprar />} />
            <Route path="/Comprar2" element={<Comprar2 />} />
            <Route path="/Comprar3" element={<Comprar3 />} />
            <Route path="/Pagamentos" element={<Pagamentos />} />
            <Route path="/Endereço" element={<Endereço />} />
            <Route path="/Compras" element={<Compras />} />

          </Routes>
        </CarrinhoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
