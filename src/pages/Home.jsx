import './Home.css';

const Home = () => {
  return (
    <section className="about-section">
      <article className="user-info">
        <div className="user-image">
          <img src="./img/arman.jpg" alt="Arman Ghaziaskari Naeini" />
        </div>

        <div className="user-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm a passionate technologist with a unique blend of skills in Data Science, Geographic Information Systems (GIS), and Web Development. I thrive on analyzing data to uncover meaningful patterns and insights, which I then transform into practical and innovative solutions.
          </p>
          <p>
            He trabajado en el ámbito público internacional con el Programa de
            las Naciones Unidas en Chile, y también en la Banca de Inversión y
            la industria automovilística, donde desarolle una mentalidad
            analítica y una visión estratégica transversal que marcan mi forma
            de entender las realidades humanas y empresariales.
          </p>
          <p>
            Mi impulso por viajar me llevo a recorrer distintas regiones del
            mundo desde zonas rurales en África hasta más receientemente en
            Alemania. En el camino, he aprendido que moverme entre países y
            desempeñar trabajos diversos me ha enseñado a adaptarme rápido,
            priorizar con claridad y conectar con la realidad de muchas
            personas.
          </p>
          <p>
            En mi día a día practico alpinismo y sigo aprendiendo sobre nuevas
            tecnologías. Tras un periodo intenso de estudio en estadística y
            economía en Bilbao, continúo formándome en lenguajes de programación
            y en inteligencia artificial.
          </p>

          {/* Si quieres dejar aquí un cv en inglés pero no de */}
          {/* <div className="cv-buttons">
            <a href="./pdfs/english.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              English Curriculum
            </a>
            <a href="./pdfs/spanish.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
              Spanish Curriculum
            </a>
          </div> */}
        </div>
      </article>
    </section>
  );
};

export default Home; 