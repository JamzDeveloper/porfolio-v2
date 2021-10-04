

import "./Description.css"
const Description = (): JSX.Element => {
  return (
    <div className="about--container--description">
      <div className="about--container--description-text">
        <div>

        <h2>¿Quién soy?</h2>
        <p>
          Soy Jose Montenegro un fronted developer, estudiante de informatica y
          autodidacta, apacionado por la tecnologia y la educacion..
        </p>
        <h2>Intereses</h2>
        <p>
          Soy amante de la programacion, actualmente me encuentro enfocado en
          las tecnologias web principalmente en javascript, y la creacion de
          apicaciones web con react.
        </p>
        <h2>Objetivos</h2>
        <p>
          Me encuentro en busca de retos profesionales que me ayuden a adquirir
          experiencia en proyecto, como tambien aprender constantemete nuevas
          tecnologias y formas de mejorar mis habilidades.
        </p>
        </div>
      </div>
      <div className="about--container--description-photo"></div>
    </div>
  );
};

export default Description;
