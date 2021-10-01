import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import WebDesing from "../web-designer.json";

const Desing = () => {
  const container: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: WebDesing,
    });
  }, []);

  return (
    <div className="animation--home--container">
      <div
        className="animation--home--container-animation"
        ref={container}
      ></div>
    </div>
  );
};

export default Desing;
