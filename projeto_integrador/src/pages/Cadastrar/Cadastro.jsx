import 'Cadastro.css'

export default function Cadastro() {
  return (
    <div className="Cadastro">
      <h1>Cadastrar-se</h1>
      <div className="linha">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar-se</button>
      </div>
    </div>
  )
}