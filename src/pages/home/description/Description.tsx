//import Card from "../../../components/card/project/Card";
import Carousel from "../../../components/carousel/Carousel";
import "./Description.css";
const Description = () => {
  return (
    <div className="description--container">
      <div>
        <div className="description--container-text">
          <h2>José Montenegro</h2>
          <h2>Frontend Developer</h2>
          <p>
            Soy apasionado con la tecnología y con la educación lo <br />
            que ocasiona a que constantemente siga aprendiendo,
            <br /> estoy continuamente en busca de nuevos retos 💪.
          </p>
        </div>
        <button className="description--container-button">Descargar CV</button>
      </div> 
      
      <Carousel />
     
        
    </div>
  );
};
export default Description;
