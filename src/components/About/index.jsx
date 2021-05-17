import React from "react";
import Avatar from "../../image/Avatar.jpg";

import { ContainerAbout, ContainerInfo } from "./style";

export default function About() {
  return (
    <ContainerAbout id="About">
      <ContainerInfo>
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
