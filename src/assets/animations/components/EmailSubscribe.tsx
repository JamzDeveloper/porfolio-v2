import React,{useEffect,useRef} from 'react'
import lottie from "lottie-web";
import emailSubscribe from '../email-notification-animation.json'
const EmailSubscribe = () => {
    const container: any= useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: emailSubscribe,
    });
  }, []);

  return (
    <div className="animation--subscribe--container">
      <div
        className="animation--subscribe--container-animation"
        ref={container}
      ></div>
    </div>
  );
}

export default EmailSubscribe
