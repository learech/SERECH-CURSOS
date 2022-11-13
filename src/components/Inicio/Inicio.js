import "./styles.css"

const Inicio = () => {
    return (
    <div>
        <h1>SERECH - CURSOS ONLINE</h1>
        <h3>Capacitación desde tu casa</h3>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    En este curso de electricista aprenderás a aplicar los principios básicos de los circuitos, tales como la resistencia, la potencia, la electricidad, las transferencias y corrientes eléctricas, los códigos de colores, los voltajes, los tipos de resistencia, entre otros con el fin de desarrollar habilidades que permitan ejecutar el montaje y la simulación de circuitos eléctricos. Es fácil de aprender y solo se requiere tener conocimientos elementales.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagenInicio" src="../imagenes/electricistacurso.jpg" alt="electricista" />
                </div>
        </div>
        <div className="textoReducido">              
                <div data-aos="fade-right">
                    <img className="imagenInicio" src="../imagenes/cerrajero.png" alt="cerrajero" />
                </div>
                <div className="flexizado" data-aos="fade-left">
                    <p className="textoInicioDos">
                    Objetivos del Curso :Brindar las competencias necesarias para la realización de trabajos de copiado de llaves, reparación, instalación y apertura de cerraduras de cilindro, multipunto, entre otros, y las técnicas necesarias para desarrollar tu propio emprendimiento.
                    </p>
                </div>
        </div>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    Por la masividad en el uso de las PC, la reparación de los equipos se ha constituido en una importante opción laboral. El curso capacita al alumno para operar técnicamente sobre una computadora con fallas en el funcionamiento, discernir entre problemas de hardware y software, además de ofrecer las soluciones de reparación, conﬁguración o cambio de partes dañadas.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagenInicio" src="../imagenes/reparadorpc.jpg" alt="reparadorDePc" />
                </div>
        </div>
        <div className="textoReducido">              
                <div data-aos="fade-right">
                    <img className="imagenInicio" src="../imagenes/gasista.jpg" alt="Gasista" />
                </div>
                <div className="flexizado" data-aos="fade-left">
                    <p className="textoInicioDos">
                    Instalaciones de artefactos de gas y plomeria en general.Instalación de estufas.Instalación de termotanques.Cañerías termofusión.Conductos de evacuación de gases.Rejillas de ventilación.Calefacciones. Calefones.  Termotanques
                    </p>
                </div>
        </div>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    Los instaladores de aire acondicionado son profesionales altamente solicitados en todo tipo de localizaciones. Averías, instalaciones… te harás cargo de todo lo derivado de sistemas de circulación de aire. Además, el sueldo de un instalador de aire acondicionado tiene amplias ventajas.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagenInicio" src="../imagenes/cursoaire.jpg" alt="instaladorSplit" />
                </div>
        </div>
    </div>
    )
}

export default Inicio