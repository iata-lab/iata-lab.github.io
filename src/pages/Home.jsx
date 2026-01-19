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
            mundo y de cómo se hacen los negocios en contextos diversos. ​
          </p>
          <p>
            Nunca he creído en encasillarme en una sola especialización,
            encambio entender un poco de todo es clave para tener más
            herramientas y tomar mejores decisiones en un mundo tan cambiante.
            En esta última etapa estoy centrado en el desarrollo de negocio, la
            internacionalización y la tecnología, buscando siempre ideas que
            impulsen el cambio en nuestra industria.
          </p>
          <p>
            Busco formar parte de una pequeña o mediana empresa en Bilbao con
            planes de internacionalización, que valore una visión global,
            digital y orientada a las personas para afrontar sus retos
            comerciales y estratégicos.
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
