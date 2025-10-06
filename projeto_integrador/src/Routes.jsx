import {Routes, Route} from "react-router-dom";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";
import Materiais from "./pages/Materiais/Materiais";
import Entrar from "./pages/Entrar/Entrar";

export default () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cadastrar" element={<Cadastrar/>}/>
        <Route path="/Materiais" element={<Materiais/>}/>
        <Route path="/Entrar" element={<Entrar/>}/>
        
        </Routes>
    )
}