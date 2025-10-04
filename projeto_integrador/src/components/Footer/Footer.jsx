import './Footer.css';
import Logo from '../../public/Logo.png';

import makita1 from '../../assets/makita1.png';
import CSN1 from '../../assets/CSN1.png';
import bosch1 from '../../assets/bosch1.png';
import DeWalt1 from '../../assets/DeWalt1.png';

export default
function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt='' />
        <div className="footer-content">
            <p>&copy; 2025 Giovanni, Gabriel, Lucas e Kauã. Todos os direitos reservados.</p>
            </div>
            <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        </footer>

    );
    }