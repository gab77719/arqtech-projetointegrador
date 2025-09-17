import './App.css'
import Cabecalho from './components/Cabecalho'
import Nav from './components/nav'
import Bolinha from './components/Bolinhas'
import Produtos from './components/Produtos'

function App() {
  

  return (
    <>
      <header>
      <Cabecalho />
       <Nav />
      </header>
      <Bolinha/>
      <section>
        <Produtos />
      </section>
      
    </>
  )
}

export default App
