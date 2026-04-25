import "./Home.css";
import photoProfileImg from "../assets/img/photo-profile.jpg";

const Home = () => {
  return (
    <section className="about-section">
      <article className="user-info">
        <div className="user-image">
          <img src={photoProfileImg} alt="Inigo Mata" />
        </div>

<div className="user-text">
  <h1>Sobre mi</h1>
  <p>
    ¡Hola! Soy un emprendedor, deportista y amante de los viajes que ha
    explorado distintos caminos, lo que me ha dado una visión amplia del
    mundo y de cómo se hacen los negocios en contextos diversos.
  </p>
  <p>
    He trabajado en el Programa de las Naciones Unidas en Chile, en
    Banca de Inversión y también en la industria automovilística, donde
    desarrolle una mentalidad analítica y una visión estratégica
    transversal que marcan mi forma de entender el entorno empresarial.
  </p>
  <p>
    Mi impulso por viajar me llevó a recorrer distintas regiones del mundo,
    desde zonas rurales en África hasta, más recientemente, los países
    escandinavos. En el camino, he aprendido que moverme entre países y
    desempeñar trabajos diversos me ha enseñado a adaptarme rápido,
    priorizar con claridad y conectar con la realidad de muchas personas.
  </p>
  <p>
    En 2022 aposté por presentarme a una plaza fija en el Instituto
    Nacional de Estadística (INE), dedicando dos años y medio a preparar
    oposiciones de forma constante. Superé el concurso en dos ocasiones,
    aunque sin alcanzar la nota de corte. Este proceso ha supuesto un punto
    de inflexión personal: ante la falta de bolsa de empleo o interinidad,
    no tenía posibilidades financieras para seguir, mientras me daba cuenta
    que buscaba en mí lo que siempre se me ha dado mejor: crecer haciendo,
    más que desde lo académico, y apoyarme en la interacción con las
    personas.
  </p>
  <p>
    Así, estos últimos 2 años he compaginado mis estudios con experiencia
    laboral en Europa, principalmente en una empresa de distribución de
    productos químicos y otros trabajos temporales, como en una fábrica en
    Noruega, mientras consolido mis conocimientos en inteligencia
    artificial y en lenguajes de programación.
  </p>
</div>
      </article>
    </section>
  );
};

export default Home;
