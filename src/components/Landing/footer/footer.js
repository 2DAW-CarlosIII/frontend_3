
import './footer.css';
import facebook from './facebook.png';
import youtube from './youtube.png';
import instagram from './instagram.png';
import twitter from './twitter.png';

const Footer = () => (

    <div className="pb-2 bg-dark text-white text-center">
        <footer>
            <div className="col-12 f">
                <a className="enlacesinteres" href="#avisolegal">Aviso legal</a>
                <a className="enlacesinteres" href="#politicaprivacidad">Política de privacidad</a>
                <a className="enlacesinteres" href="#cookies">Política de cookies</a>
                <a className="enlacesinteres" href="#contacto">Contacto</a>
            </div>
            <div className="col-12 f mt-3">
                <p className="copyright">© BikBikBike.es 2023</p>
            </div>
            <div className="col-12 f">
                <a className="rrss" href="#facebook"><img src={facebook} alt="" /></a>
                <a className="rrss" href="#youtube"><img src={youtube} alt="" /></a>
                <a className="rrss" href="#instagram"><img src={instagram} alt="" /></a>
                <a className="rrss" href="#twitter"><img src={twitter} alt="" /></a>
            </div>
        </footer>
    </div>

);
export default Footer;