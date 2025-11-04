import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'

import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";
import Materiais from "./pages/Materiais/Materiais";
import Entrar from "./pages/Entrar/Entrar";
import Carrinho from "./pages/Carrinho/Carrinho";
import Conta from "./pages/Conta/Conta";
import Parcerias from "./pages/Parcerias/Parcerias"
import Comprar from "./pages/Comprar/Comprar"
import Pagamentos from "./pages/Pagamentos/Pagamentos";
import Teste from "./pages/Teste/Teste";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/arqtech-projetointegrador'>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Materiais" element={<Materiais />} />
        <Route path="/Entrar" element={<Entrar />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/Conta" element={<Conta />} />
        <Route path="/Parcerias" element={<Parcerias />} />
        <Route path="/Comprar" element={<Comprar />} />
        <Route path="/Pagamentos" element={<Pagamentos />} />
        <Route path="/Teste" element={<Teste/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
