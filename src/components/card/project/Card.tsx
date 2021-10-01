import { useEffect, useState } from "react";
import "./Card.css";

type props = {
  title: String;
  img: String;
  technology: Array<String>;
  description: String;
  link: String;
  repository: String;
  home: Boolean;
};
type stylecss = {
  setProperty: Function;
  getPropertyValue: Function;
};
const Card = (props: props): JSX.Element => {
  const { home } = props;
  const [description, setDescription] = useState<String>(props.description);
  useEffect(() => {
    const styleVariables: stylecss = document.documentElement.style;
    if (home) {
      setDescription("");
      styleVariables.setProperty("--project-card-width", "232px");
      styleVariables.setProperty("--project-card-height", "142px");
      styleVariables.setProperty("--font-size-project-card-title", "25px");
      styleVariables.setProperty("--font-size-project-card-button", "14px");
    } else {
      styleVariables.setProperty("--project-card-width", "369px");
      styleVariables.setProperty("--project-card-height", "264px");
      styleVariables.setProperty("--font-size-project-card-title", "30px");
      styleVariables.setProperty("--font-size-project-card-button", "18px");
    }
  }, [home]);
  return (
    <div className="card--project--container ">
      <figure className="card--project-figure">
        <img
          className="card--project--img"
          src={"" + props.img}
          alt="project"
        />
        <div className="card--project--cloak">
          <h3 className="card--project--cloak-title">{props.title}</h3>
          <div className="card--project--cloak-tech">
            {props.technology.map((url, index): JSX.Element => {
              return <img src={"" + url} key={index} alt="technology" />;
            })}
          </div>
          {description ? (
            <p className="card--project--cloak-description">{description}</p>
          ) : (
            <p style={{ display: "none" }}></p>
          )}

          <div className="card--project--button-container">
            <a href={"" + props.link}>Vista previa</a>
            <a href={"" + props.repository}>Repositorio</a>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Card;
