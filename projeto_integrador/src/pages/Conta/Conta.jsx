import './Conta.css';

export default function Conta() {
  return (
    <>
    <div className='conta-container'>
        <div className='cabecalho-conta'>
        <div className='foto-perfil'>
            <ion-icon name="person-circle-outline"></ion-icon>
        </div>
        <h1>Nome do Usuário:</h1>

        <div className='alterar'>
            <p>Clique aqui para alterar os dados da conta </p>
        </div>
</div>



    </div>
    </>
  )
}