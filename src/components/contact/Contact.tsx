import ContactElement from "./ContactElement.json";
import "./Contact.css";
type LinkContact = {
  href: string;
  icon: string;
  alt: string;
  title: string;
};

const Contact = () => {
  return (
    <div className="about--contact">
      <div className="about--container--contact">
        <div className="about--container--contact-title">
          <h1>Contactame</h1>
        </div>

        <div className="about--container--contact--content">
          <div className="about--container--contact--content-text">
            <p>
              Tiene algún proyecto en mente o deseas un aplicación para mejorar
              y potenciar tu negocio? Contactame atrevés de los siguientes
              método, responderé tu solictud lo antes posible.
            </p>
            <div className="about--container--contact--content-element">
              {ContactElement.map((element: LinkContact, index) => {
                return (
                  <a key={index} href={element.href} target="__blank">
                    <img
                      title={element.title}
                      src={element.icon}
                      alt={element.alt}
                    ></img>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
