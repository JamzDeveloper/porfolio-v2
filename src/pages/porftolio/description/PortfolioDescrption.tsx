import "./PortfolioDescription.css";
const Description = (): JSX.Element => {
  return (
    <div className="about--container--description">
      <div className="about--container--description-text">
        <div>
          <h2>¿Quién soy?</h2>
          <p>
            Soy José Montenegro un full stack developer, estudiante de
            informática y autodidacta, apasionado por la tecnología y la
            educación.
          </p>
          <h2>Intereses</h2>
          <p>
            Soy amante de la programación, actualmente me encuentro enfocado en
            las tecnologías web principalmente con TypeScript, y la creación de
            aplicaciones web con React y NodeJs.
          </p>
          <h2>Objetivos</h2>
          <p>
            Me encuentro en busca de retos profesionales que me ayuden a
            adquirir experiencia en proyecto, como también aprender
            constantemente nuevas tecnologías y formas de mejorar mis
            habilidades.
          </p>
        </div>
      </div>
      <div className="about--container--description-photo"></div>
    </div>
  );
};

export default Description;
