import './Home.css'
import Cabecalho from '../../components/Cabecalho'
import Bolinha from '../../components/Bolinhas'
import Produtos from '../../components/Produtos'
import Sobre from '../../components/Sobre'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <header>
      <Cabecalho />
      </header>
      <Bolinha/>
      <section>
        <Produtos />
      </section>
      <section>
      <Sobre/>
      </section>
      <footer>
        <Footer />
      </footer>
   
    </>

  )
}
