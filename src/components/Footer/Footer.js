import React from 'react'
import logo from '../../logo.png';
import "./styles.css";


const Footer = () => {
    return (
        <footer className='flexPadre'>
            <div className='flexFooter'>
                <img className='logoFooter' src={logo} alt="" />
                <h5 className='textoFooter'>SERECH-Cursos Online</h5>
                <h5 className='copyrigth'>By LeaRech</h5>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.6421255944306!2d-60.67313838509274!3d-32.93405228092492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab545cab1d3d%3A0x8c74c3a4dcb18dec!2sMED%2C%20San%20Nicol%C3%A1s%20264%2C%20S2002%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1668339323419!5m2!1ses!2sar"></iframe>
            </div>
            <div className='flexRedes'>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/facebook.svg" alt="logo facebook" />
                    <p>Facebook</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/instagram.svg" alt="logo instagram" />
                    <p>Instagram</p>
                </div>
                <div className='flexParrafo'>
                    <img className='tamañoLogo' src="../../imagenes/mail.svg" alt="logo mail" />
                    <p>Mail</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer