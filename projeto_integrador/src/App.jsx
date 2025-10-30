import './App.css'
import Rotas from './Routes.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter basename='/arqtech-projetointegrador'>
        <Rotas />
      </BrowserRouter>
    </>

  )
}

export default App
