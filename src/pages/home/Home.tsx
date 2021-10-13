import Description from "./description/Description";
//import Model3d from "../../components/model3d/Model3d";
import Desing from "../../assets/animations/components/Desing";

import "./Home.css";
import Content from "./content/Content";
const Home = (): JSX.Element => {
  return (
    <div className="view--home">
      <article className="presentation">
        <div className="presentation--description">
          <Description />
        </div>
        <div className="presentation--model3d">
          <Desing/>
        </div>
      </article>
      <article  className="art">
        <h3>Artículos</h3>
        <Content />
        <div className="container--challenges ">
        <h3>Retos</h3>

        <Content />
        </div>
      </article>
      
    </div>
  );
};
export default Home;
