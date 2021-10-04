import CardTechnology from "../../../components/card/technology/Technology";

import "./Skills.css";
const Skills = (): JSX.Element => {
  return (
    <div className="about--container--skills">
      <h2>Habilidades</h2>
      <div>
        <CardTechnology
          title="Html"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633273009/technologies/html-svg_nn8q2v.svg"
        />
         <CardTechnology
          title="Css"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633273222/technologies/css-svg_wtxhge.svg"
        />
         <CardTechnology
          title="JavaScript"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/logo-javascript_giqnbx.svg"
        />
         <CardTechnology
          title="React"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg"
        />
         <CardTechnology
          title="Next.js"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633329343/technologies/nextjs-logo_t1c8oy.svg"
        />
         <CardTechnology
          title="TypeScript"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633272258/technologies/ts-logo-256_zvqnhj.svg"
        />
         <CardTechnology
          title="Node.js"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633321397/technologies/nodejs-1_dstxls_o3r9ai.svg"
        />
         <CardTechnology
          title="MySQL"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633321719/technologies/mysql-official_taks2t.svg"
        />
         <CardTechnology
          title="Figma"
          img="https://res.cloudinary.com/duhbmesjr/image/upload/v1633321488/technologies/figma-1_etrjc9_btitva.svg"
        />
      </div>
    </div>
  );
};

export default Skills;
