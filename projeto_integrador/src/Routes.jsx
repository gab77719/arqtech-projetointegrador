import {Routes, Route} from "react-router-dom";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";
import Materiais from "./pages/Materiais/Materiais";
import Entrar from "./pages/Entrar/Entrar";
import Carrinho from "./pages/Carrinho/Carrinho";
import Conta from "./pages/Conta/Conta";
import Parcerias from "./pages/Parcerias/Parcerias"
import Comprar from "./pages/Comprar/Comprar"
import Pagamentos from "./pages/Pagamentos/Pagamentos";


export default function Rotas() {
    return(
        <BrowserRouter basename='/arqtech-projetointegrador'>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Cadastrar" element={<Cadastrar/>}></Route>
                <Route path="/Materiais" element={<Materiais/>}></Route>
                <Route path="/Entrar" element={<Entrar/>}></Route>
                <Route path="/Carrinho" element={<Carrinho/>}></Route>
                <Route path="/Conta" element={<Conta/>}></Route>
                <Route path="/Parcerias" element={<Parcerias/>}></Route>
                <Route path="/Comprar" element={<Comprar/>}></Route>
                <Route path="/Pagamentos" element={<Pagamentos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}