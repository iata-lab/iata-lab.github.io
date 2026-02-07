import "./Home.css";

const Home = () => {
  return (
    <section className="about-section">
      <article className="user-info">
        <div className="user-image">
          <img src="/img-1/foto-perfil-1.png" alt="Inigo Mata" />
        </div>

        <div className="user-text">
          <h1>Sobre mi</h1>
          <p>
            ¡Hola! Soy un emprendedor, deportista y amante de los viajes que ha
            explorado distintos caminos, lo que me ha dado una visión amplia del
            mundo y de cómo se hacen los negocios en contextos diversos.
          </p>
          <p>
            Mi recorrido comenzó en África, una experiencia que despertó mi
            curiosidad por escuchar a las personas y por el valor de construir
            proyectos compartidos. Más adelante, pasé más de cinco años en áreas
            financieras, desarrollando una mentalidad analítica y estratégica
            que marcó mi manera de entender el negocio y generar crecimiento
            sostenible.
          </p>
          <p>
            Con el tiempo, trabajar en varios países y equipos fortaleció mi
            capacidad de adaptación, mi sentido de prioridad y una visión de
            conjunto que aplico ante cualquier reto.
          </p>
          <p>
            En mi día a día practico alpinismo, meditación y me mantengo al
            tanto de las herramientas tecnológicas y literarias que impulsan el
            aprendizaje continuo.
          </p>º
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
