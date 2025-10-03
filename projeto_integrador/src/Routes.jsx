import {Routes, Route} from "react-router-dom";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home";

export default () => {
    return(
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cadastrar" element={<Cadastrar/>}/>
        <Route path='*' element={<div>Página não encontrada</div>}/>
        </Routes>
    )
}