import './Sobre.css';
import logo from '../../assets/logoarq.png';
import imgfooter from '../../assets/imagens_footer.png';


export default function Sobre() {
    return (
        <section className='sobre-section'>
            <h1 className='titulo text-3xl'> Sobre Nós</h1>
            <hr />
            <div className='sobre-container'>
            <p className='sobre mt-10'>A Arqtech é uma plataforma online especializada na <br/>
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
                 <img src={logo} alt="imagem_sobre" className="logo-sobre mt-10" />

                 </div>

                 <img src={imgfooter} alt="" className='imagem' />
        </section>
        
    );}