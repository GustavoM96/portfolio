import React, { useEffect, useState } from "react";
import Avatar from "../../image/Avatar.jpg";
import { ContainerAbout, ContainerInfo } from "./style";

export default function About() {
  const [isShown, setisShown] = useState(false);

  const loadComponent = new IntersectionObserver(
    (entry) => {
      console.log(entry[0].intersectionRatio);
      if (entry[0].intersectionRatio > 0.5) {
        setisShown(true);
      }
      if (entry[0].intersectionRatio == 0) {
        setisShown(false);
      }
    },
    {
      threshold: [0, 0.5],
    }
  );
  useEffect(() => {
    loadComponent.observe(document.getElementById("About"));
  }, []);
  return (
    <ContainerAbout id="About">
      <ContainerInfo isShown={isShown}>
        <figure>
          <img src={Avatar} alt="Gustavo" />
        </figure>
        <div id="containerText">
          <h2>Desenvolvedor em constante desenvolvimento...</h2>

          <p>
            Desenvolvedor front-end certificado pela Kenzie Academy Brasil com
            experiência prática em projetos web.
          </p>

          <p>
            Amo explorar o mundo da programação, nosso universo é grandíssimo
            cheio de aprendizados e novas descobertas
          </p>
        </div>
      </ContainerInfo>
    </ContainerAbout>
  );
}
