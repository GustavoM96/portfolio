import React, { useEffect, useState } from "react";
import Avatar from "../../image/Avatar.jpg";
import { useObserver } from "../../services/intersectionObserver";
import {
  ContainerAbout,
  ContainerImg,
  ContainerInfo,
  ContainerText,
} from "./style";

export default function About() {
  const [isShown, setisShown] = useState(false);
  const loadComponent = useObserver(setisShown);

  useEffect(() => {
    loadComponent.observe(document.getElementById("About"));
  }, []);
  return (
    <ContainerAbout id="About">
      <ContainerInfo>
        <ContainerText isShown={isShown}>
          <h2>Desenvolvedor em constante desenvolvimento...</h2>

          <p>
            Desenvolvedor front-end certificado pela Kenzie Academy Brasil com
            experiência prática em projetos web.
          </p>

          <p>
            Amo explorar o mundo da programação, nosso universo é grandíssimo
            cheio de aprendizados e novas descobertas
          </p>
        </ContainerText>
        <ContainerImg isShown={isShown}>
          <img src={Avatar} alt="Gustavo" />
        </ContainerImg>
      </ContainerInfo>
    </ContainerAbout>
  );
}
