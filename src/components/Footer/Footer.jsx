import "./Footer.css";
import Logo from "../../public/Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="logo-footer">
          <img src={Logo} alt="Arqtech" />
        </div>
        <div className="contatos">
          <p>
            <strong>Contatos</strong> <br />
            <br />
            E-mail: arqtech@gmail.com <br />
            Telefone: (12) 1234-9089
          </p>
        </div>
        <div className="rede-social">
          <p>
            <strong>Siga-nos nas Redes sociais</strong>
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="face"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>

        <div className="localizacao">
          <p>
            <strong>Localização</strong> <br />
            <br />
            Av. das Palmeiras, 123 – Centro, <br />
            Cidade Exemplo – SP, CEP <br />
            01234-567{" "}
          </p>
        </div>

        <div className="direitos">
          © Todos os direitos reservados
        </div>


        <button
          className="btn-topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </footer>
    </>
  );
}
