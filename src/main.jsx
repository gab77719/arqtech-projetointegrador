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
import ComprarM from "./pages/ComprarM/ComprarM";
import ComprarM2 from "./pages/ComprarM2/ComprarM2";
import ComprarM3 from "./pages/ComprarM3/ComprarM3";
import ComprarM4 from "./pages/ComprarM4/ComprarM4";
import ComprarM5 from "./pages/ComprarM5/ComprarM5";
import ComprarM6 from "./pages/ComprarM6/ComprarM6";

// Páginas de Categorias - Máquinas
import Furadeiras from './pages/Categorias/Maquinas/Furadeiras';
import Serras from './pages/Categorias/Maquinas/Serras';
import Lixadeiras from './pages/Categorias/Maquinas/Lixadeiras';
import Plainas from './pages/Categorias/Maquinas/Plainas';

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
            <Route path="/ComprarM" element={<ComprarM />} />
            <Route path="/ComprarM2" element={<ComprarM2 />} />
            <Route path="/ComprarM3" element={<ComprarM3 />} />
            <Route path="/ComprarM4" element={<ComprarM4 />} />
            <Route path="/ComprarM5" element={<ComprarM5 />} />
            <Route path="/ComprarM6" element={<ComprarM6 />} />

            {/* Máquinas */}
            <Route path="/categorias/maquinas/furadeiras" element={<Furadeiras />} />
            <Route path="/categorias/maquinas/serras" element={<Serras />} />
            <Route path="/categorias/maquinas/lixadeiras" element={<Lixadeiras />} />
            <Route path="/categorias/maquinas/plainas" element={<Plainas />} />


          </Routes>
        </CarrinhoProvider>
      </AuthProvider>
    </BrowserRouter>''
  </StrictMode>
);
