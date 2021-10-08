import Card from "../../../components/card/project/Card";
import Data from './data.json';
import CardProject from '../../../interfaces/CardProject';

import "./Project.css";
const Project = (): JSX.Element => {
  return (
    <div className="about--container--project">
      <h2>Proyectos</h2>
      <div className="about--project--element">
         { Data.map((property: CardProject,index) => (
             <Card key={index}classPerso="about--project-card" title={property.title} img={property.img} technology={property.technology} description={property.description} link={property.link} repository={property.repository} home={property.home} />
         ))}
      </div>
    </div>
  );
};

export default Project;
