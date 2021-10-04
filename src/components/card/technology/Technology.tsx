import "./Technology.css";
type props = {
  title: String;
  img: String;
};

const CardTechnology = (props: props): JSX.Element => {
  return (
    <div className="card--technology--container ">
      <figure className="card--technology--figure">
        <img
          className="card--technology-img"
          src={"" + props.img}
          alt={`thecnology-${props.title}`}
        />
        <div className="card--technology--cloak">
          <h3 className="card--technology--cloak-title">{props.title}</h3>
        </div>
      </figure>
    </div>
  );
};

export default CardTechnology;
