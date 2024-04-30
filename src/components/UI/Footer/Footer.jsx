import { FaInstagram, FaYoutube, FaMapMarkerAlt, FaTwitter, FaFacebook, FaTwitch, FaDiscord, FaHome } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import './footer.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-left-title">Nerd's ComputerShop</h2>
                <div className="social-container">
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaInstagram />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaTwitter />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaFacebook />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaYoutube />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaTwitch />
                    </motion.span>
                    <motion.span className="social-icon" whileHover={{color: '#e28301'}}>
                        <FaDiscord />
                    </motion.span>
                </div>
                    <p className="footer-desc">Diese Website wurde ausschließlich zu Bildungszwecken erstellt.</p>
                </div>


                <div className="footer-center">
                        <h4 className="footer-title">INFORMATIONEN</h4>
                    <div className="footer-links">
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">Startseite</p>
                        </Link> 
                        <Link className="ft-link" to={`/shop`}>
                            <p className="ft-linkItem">Shop</p>
                        </Link> 
                        <Link className="ft-link" to={`/about`}>
                            <p className="ft-linkItem">Über uns</p>
                        </Link>
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">Impressum</p>
                        </Link>
                        <Link className="ft-link" to={`/contact`}>
                            <p className="ft-linkItem">Kontakt / Feedback</p>
                        </Link>
                    </div>
                </div>


                <div className="footer-center">
                        <h4 className="footer-title">HÄUFIGE FRAGEN</h4>
                    <div className="footer-links">
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">AGB</p>
                        </Link> 
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">Datenschutz</p>
                        </Link> 
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">Widerrufsrecht</p>
                        </Link>
                        <Link className="ft-link" to={`/`}>
                            <p className="ft-linkItem">Lieferzeiten</p>
                        </Link>
                    </div>
                </div>


                <div className="footer-right">
                        <h4 className="footer-titleContact">KONTAKT / FEEDBACK</h4>
                    <div className="footer-links">
                        <div className="ft-contact">
                            <motion.span>
                                <FaHome className="symbol" />
                            </motion.span>
                            <p className="footer-listItem">148061 Nerdstrasse 5</p >
                        </div>
                        <div className="ft-contact">
                            <motion.span>
                                <MdLocalPhone className="symbol" />
                            </motion.span>
                            <p className="footer-listItem"> +49 2134 / 987654</p >
                        </div>
                        <div className="ft-contact">
                            <motion.span>
                                <MdEmail className="symbol" />
                            </motion.span>
                            <p className="footer-listItem"> Email: nerdscomp@gmail</p >
                        </div>
                        <div className="ft-contact">
                            <motion.span>
                                <FaMapMarkerAlt className="symbol" />
                            </motion.span>
                            <p className="footer-listItem">Google Maps</p >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
