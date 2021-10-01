import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
//import Lottie from "react-lottie";

import "./NotFound.css";
import NotFount from "../../assets/animations/404.json";
//import { useWindowSize } from '@react-hook/window-size/throttled';

const NotFound = () => {
  //const size:Size =useWindowSize();

  const container: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NotFount,
    });
  }, []);

  return (
    <div className="notfount--container">
      <div className="notfount--container-animation" ref={container}></div>
    </div>
  );

  /*const defaultOptions:any = {
    loop: true,
    autoplay: true,
    pauseOnHover: true,
    animationData:NotFount,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="notfount--container">
      <Lottie options={defaultOptions} height={530} width={530} isPaused={true}
       isStopped={true}/>
    </div>
  );*/
};

export default NotFound;
