import CardTechnology from "../../../components/card/technology/Technology";

import data from "./skills.json";

import "./Skills.css";
const Skills = (): JSX.Element => {
  return (
    <div className="about--container--skills">
      <h2>Habilidades</h2>
      <div>
        {data.map((item) => (
          <CardTechnology title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
