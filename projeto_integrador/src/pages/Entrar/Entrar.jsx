import 'Entrar.css'

export default function Entrar() {
  return (
    <div className="entrar">
      <h1>Entrar</h1>
      <div className="linha">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </div>
    </div>
  )
}