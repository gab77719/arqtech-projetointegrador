import React from 'react';
import "./Cabecalho.css";
import Logo from "../../public/Logo.png";
import { Link, useNavigate } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa';
import { doLogout } from '../../lib/AuthHandler';
import { useAuth } from '../../contexts/AuthContext';
import {useState} from 'react'  


export default function Cabecalho() {
  const { logged, setLogged, user, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = React.useState(false);


  const handleLogout = () => {
    doLogout();
    setLogged(false);
    setUser(null);
    setMenuOpen(false);
    navigate('/'); 
  };

  const handleCategoriaChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value); 
    }
  };

  const[query,setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const termo =query.toLowerCase().trim();

    if (termo.includes("serra de marmore")){
      navigate("/Comprar");
    }  else if (termo.includes("serra")){
      navigate("/Comprar");}
      else if (termo.includes("martelete")){
      navigate("/Comprar2");
    }else if (termo.includes("parafusadeira")){
    navigate("/Comprar3");
    }else {
      alert("Nenhum resultado encontrado")
    }
  };
  return (
    <>
      <header className="cabecalho">
        <Link to="/">
          <img src={Logo} alt="Logo da empresa" className="cabecalho__logo" />
        </Link>

        <form onSubmit={handleSearch} className="cabecalho__search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar..."
            className="search-bar"
          />
          <button className="search-button">
            <IoIosSearch />
          </button>
        </form>

        <div className="cabecalho__actions">
          {logged ? (
            <>
              <Link to='/Compras' className='anuncio'>Compras</Link>
              <Link to='/Carrinho' className='anuncio'>
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
              <div className='profileContainer'>
                <button
                  className='profileBtn'
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className='profileImg'
                  />
                  <span className="text-white">{user.name?.split(' ')[0]}</span>
                  <FaAngleDown size={16} className='arrow' />
                </button>
                {menuOpen && (
                  <div className='dropdownMenu'>
                    <Link to="/Conta">Meu perfil</Link>
                    <Link to="/Notificacoes">Notificações</Link>
                    <button onClick={handleLogout}>Sair</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/Entrar">Entrar</Link>
              <Link to="/Cadastrar">Cadastrar</Link>
              <Link to="/Carrinho">
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
            </>
          )}
        </div>
      </header>

      <nav className="cabecalho-nav">
        <select
          className="categorias"
          defaultValue=""
          onChange={handleCategoriaChange}
        >
          <option value="" disabled hidden>Categorias</option>

          <optgroup label="Máquinas">
            <option value="/categoria/maquinas/furadeiras">Furadeiras</option>
            <option value="/categoria/maquinas/serras">Serras</option>
            <option value="/categoria/maquinas/lixadeiras">Lixadeiras</option>
            <option value="/categoria/maquinas/plainas">Plainas</option>
          </optgroup>

          <optgroup label="Fixação">
            <option value="/categoria/fixacao/parafusos">Parafusos</option>
            <option value="/categoria/fixacao/buchas">Buchas</option>
            <option value="/categoria/fixacao/pregos">Pregos</option>
            <option value="/categoria/fixacao/porcas">Porcas e Arruelas</option>
          </optgroup>

          <optgroup label="Hidráulica">
            <option value="/categoria/hidraulica/tubos">Tubos</option>
            <option value="/categoria/hidraulica/conexoes">Conexões</option>
            <option value="/categoria/hidraulica/registros">Registros</option>
            <option value="/categoria/hidraulica/valvulas">Válvulas</option>
          </optgroup>

          <optgroup label="Revestimento">
            <option value="/categoria/revestimento/pisos">Pisos</option>
            <option value="/categoria/revestimento/azulejos">Azulejos</option>
            <option value="/categoria/revestimento/porcelanatos">Porcelanatos</option>
            <option value="/categoria/revestimento/pastilhas">Pastilhas</option>
          </optgroup>
        </select>

        <Link to="/">Ferramentas</Link>
        <Link to="/Materiais">Construção e Acabamentos</Link>
        <Link to="/Parcerias">Marcas</Link>
      </nav>
    </>
  );
}
