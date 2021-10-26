import React, { Suspense } from "react";
import Description from "./description/PortfolioDescrption";
import Loading from "../../assets/animations/components/Loading";
import Contact from "../../components/contact/Contact"

import "./About.css";

const Skills = React.lazy(() => import("./skills/Skills"));
const Project = React.lazy(() => import("./project/Project"));

const About = () => {
  return (
    <div className="view--about">
      <Description />
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Project />
      </Suspense>
      <Contact />
      
    </div>
  );
};
export default About;
