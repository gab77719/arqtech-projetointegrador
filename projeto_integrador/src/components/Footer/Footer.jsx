import './Footer.css';
import Logo from '../../public/Logo.png';

import makita1 from '../../public/makita1.png';
import CSN1 from '../../public/CSN1.png';
import bosch1 from '../../public/bosch1.png';
import DeWalt1 from '../../public/DeWalt1.png';



</body>

function Footer() {
    return (
        <footer className="footer">
            <img src="" alt={Logo} />
        <div className="footer-content">
            <p>&copy; 2025 Giovanni, Gabriel, Lucas e Kauã. Todos os direitos reservados.</p>
            <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>




        </div>
        </footer>

    );
    }