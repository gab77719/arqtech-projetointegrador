import {Routes, Route, BrowserRouter} from "react-router-dom";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";
import Materiais from "./pages/Materiais/Materiais";
import Entrar from "./pages/Entrar/Entrar";
import Carrinho from "./pages/Carrinho/Carrinho";
import Conta from "./pages/Conta/Conta";
import Parcerias from "./pages/Parcerias/Parcerias"
import Comprar from "./pages/Comprar/Comprar"


export default () => {
    return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Cadastrar" element={<Cadastrar/>}/>
                <Route path="/Materiais" element={<Materiais/>}/>
                <Route path="/Entrar" element={<Entrar/>}/>
                <Route path="/Carrinho" element={<Carrinho/>}/>
                <Route path="/Conta" element={<Conta/>}/>
                <Route path="/Parcerias" element={<Parcerias/>}/>
                <Route path="/Comprar" element={<Comprar/>}/>
            </Routes>
    )
}