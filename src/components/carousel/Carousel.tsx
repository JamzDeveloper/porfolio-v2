import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Card from "../card/project/Card";
import ArrowLeft from "../../assets/components-svg/ArrowLeft";
import ArrowRight from "../../assets/components-svg/ArrowRight";
import useWindowSize from "../../hooks/useWindowSize";

import "./Carousel.css";
const Carousel = () => {
  const { width } = useWindowSize();
  const [slider] = useState<any>(
    new Glide(".main__glide", {
      startAt: 2,
      perView: 2.3,
      focusAt: "center",
    })
  );
  useEffect(() => {
    slider.mount();
    return () => slider.destroy();
  }, [slider]);

  useEffect(() => {
    if (width < 1300 && width > 1168) {
      slider.update({
        perView: 2,
      });
    } else {
      if (width <= 1168) {
        slider.update({
          perView: 1,
        });
      } else {
        slider.update({
          perView: 2.3,
        });
      }
    }
  }, [width]);

  return (
    <div className="main__glide carousel--container">
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          <ArrowLeft />
        </button>
      </div>

      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
          <li className="glide__slide">
            <Card
              title="Portafolio"
              img="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/img_portafolio_uoizev.png"
              technology={[
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
                "https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg",
              ]}
              description="Portafolio personal realizado de la mejor manera para mostrar mis proyecto y habilidades"
              link="/"
              repository="/"
              home={true}
            />
          </li>
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
