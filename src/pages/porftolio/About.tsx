import Description from "./description/Descrption";
import "./About.css";
import Skills from "./skills/Skills";

const About = () => {
  return (
    <div className="view--about">
      <Description />
      <Skills />
      <div className="about--container--project"></div>
    </div>
  );
};
export default About;
