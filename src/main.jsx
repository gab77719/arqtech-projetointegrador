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
import ComprarM7 from "./pages/ComprarM7/ComprarM7";
import ComprarM8 from "./pages/ComprarM8/ComprarM8";
import ComprarM9 from "./pages/ComprarM9/ComprarM9";
import Materiais1 from "./pages/Materiais1/materiais1";
import Materiais2 from "./pages/Materiais2/Materiais2";
import Cabecalho from "./components/Cabecalho/index"
import Materiais3 from "./pages/Materiais3/Materiais3";
import Produto from "./pages/Produto/Produto";
import Pix from "./pages/Pix/Pix";
import Cartão from "./pages/Cartão/Cartão";



// CATEGORIAS - MÁQUINAS
// ==========================================
import Furadeiras from './pages/Categorias/Maquinas/Furadeiras';
import Serras from './pages/Categorias/Maquinas/Serras';
import Lixadeiras from './pages/Categorias/Maquinas/Lixadeiras';
import Plainas from './pages/Categorias/Maquinas/Plainas';


// ==========================================
// CATEGORIAS - FIXAÇÃO
// ==========================================
import Parafusos from './pages/Categorias/Fixacao/Parafusos';
import Buchas from './pages/Categorias/Fixacao/Buchas';
import Pregos from './pages/Categorias/Fixacao/Pregos';
import PorcasArruelas from './pages/Categorias/Fixacao/Porcas';

// ==========================================
// CATEGORIAS - HIDRÁULICA
// ==========================================
import Tubos from './pages/Categorias/Hidraulica/Tubos';
import Conexoes from './pages/Categorias/Hidraulica/Conexoes';
import Registros from './pages/Categorias/Hidraulica/Registros';
import Valvulas from './pages/Categorias/Hidraulica/Valvulas';

// ==========================================
// CATEGORIAS - REVESTIMENTO
// ==========================================
import Pisos from './pages/Categorias/Revestimento/Pisos';
import Azulejos from './pages/Categorias/Revestimento/Azulejos';
import Porcelanatos from './pages/Categorias/Revestimento/Porcelanatos';
import Pastilhas from './pages/Categorias/Revestimento/Pastilhas';

// Contextos
import { AuthProvider } from "./contexts/AuthContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";


createRoot(document.getElementById("root")).render(

  
  <StrictMode>
    <BrowserRouter basename="/arqtech-projetointegrador">

      {/* Contextos globais */}
      <AuthProvider>
        <Cabecalho />
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
            <Route path="/ComprarM7" element={<ComprarM7 />} />
            <Route path="/ComprarM8" element={<ComprarM8 />} />
            <Route path="/ComprarM9" element={<ComprarM9 />} />
            <Route path="/Materiais1" element={<Materiais1 />} />
            <Route path="/Materiais2" element={<Materiais2 />} />
            <Route path="/Materiais3" element={<Materiais3 />} />
            <Route path="/Produto/:id" element={<Produto />} /> 
            <Route path="/Pix" element={<Pix />} />
            <Route path="/Cartão" element={<Cartão />} />
           

            {/* CATEGORIAS - MÁQUINAS */}
            {/* ========================================== */}
            <Route path="/categoria/maquinas/furadeiras" element={<Furadeiras />} />
            <Route path="/categoria/maquinas/serras" element={<Serras />} />
            <Route path="/categoria/maquinas/lixadeiras" element={<Lixadeiras />} />
            <Route path="/categoria/maquinas/plainas" element={<Plainas />} />

            {/* ========================================== */}
            {/* CATEGORIAS - FIXAÇÃO */}
            {/* ========================================== */}
            <Route path="/categoria/fixacao/parafusos" element={<Parafusos />} />
            <Route path="/categoria/fixacao/buchas" element={<Buchas />} />
            <Route path="/categoria/fixacao/pregos" element={<Pregos />} />
            <Route path="/categoria/fixacao/porcas" element={<PorcasArruelas />} />

            {/* ========================================== */}
            {/* CATEGORIAS - HIDRÁULICA */}
            {/* ========================================== */}
            <Route path="/categoria/hidraulica/tubos" element={<Tubos />} />
            <Route path="/categoria/hidraulica/conexoes" element={<Conexoes />} />
            <Route path="/categoria/hidraulica/registros" element={<Registros />} />
            <Route path="/categoria/hidraulica/valvulas" element={<Valvulas />} />

            {/* ========================================== */}
            {/* CATEGORIAS - REVESTIMENTO */}
            {/* ========================================== */}
            <Route path="/categoria/revestimento/pisos" element={<Pisos />} />
            <Route path="/categoria/revestimento/azulejos" element={<Azulejos />} />
            <Route path="/categoria/revestimento/porcelanatos" element={<Porcelanatos />} />
            <Route path="/categoria/revestimento/pastilhas" element={<Pastilhas />} />

          


          </Routes>
        </CarrinhoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
