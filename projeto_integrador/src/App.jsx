import './App.css'
import Cabecalho from './components/Cabecalho'
import Bolinha from './components/Bolinhas'
import Produtos from './components/Produtos'
import Sobre from './components/Sobre'

function App() {
  

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
    </>
  )
}

export default App
