/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
const Party = (props: Props) => {
  const container: any = useRef<HTMLDivElement>(null);
  let animate: any;
  useEffect(() => {
    console.log("party useeffect");
    animate = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
    });
    if (props.isPlaying) {
      container.current.classList.remove("party--hide");
      console.log("play");
      animate.goToAndPlay(0, true);
    }
    animate.addEventListener("complete", () => {
      console.log(container.current);
      container.current.className += " party--hide";
       props.setIsPlaying(false);
      console.log("complete");
    });
  }, [props.isPlaying]);

  return <div className="animation--subscribe--party party--hide" ref={container}></div>;
};

export default Party;
