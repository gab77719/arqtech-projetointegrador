import './Sobre.css';
import Logo from '../../public/Logo.png';

export default function Sobre() {
    return (
        <section>
            <h1 className='titulo'> Sobre Nós</h1>
            <hr />
            <p className='sobre'>A Arqtech é uma plataforma online especializada na <br/>
                 venda de ferramentas manuais, elétricas e acessórios <br/>
                 para uso doméstico ou profissional. Ele permite que <br/>
                 clientes escolham, comparem e comprem produtos de <br/>
                 forma rápida e segura, com entrega em domicílio. <br/><br/>
                 
                 O objetivo é oferecer praticidade, variedade e bom <br/>
                 custo-benefício para quem precisa de ferramentas com<br/>
                  agilidade e confiança.
                  <br /><br />

                  Ferramentas de ponta com preços que cabem no seu <br/>
                  bolso. Algo que você só encontra aqui, na ARQTECH <br/>
                  engenharia. 
                 </p>
                 <img src={Logo} alt="" />
        </section>
        
    );}