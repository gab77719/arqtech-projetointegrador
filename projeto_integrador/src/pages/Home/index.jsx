import './Home.css'
import Cabecalho from '../../components/Cabecalho'
import Bolinha from '../../components/Bolinhas'
import Produtos from '../../components/Produtos'
import Sobre from '../../components/Sobre'
import Cadastrar from '../../pages/Cadastrar/Cadastrar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
      <Cabecalho />
      <main>
      <Link to='/Cadastrar'>Sobre</Link>
      </main>
      </header>
      <Bolinha/>
      <section>
        <Produtos />
      </section>
      <section>
      <Sobre/>
    
      </section>
    </>

  )
}
