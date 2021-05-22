import React from "react";
import iconPc from "../../image/astro2.png";

import { ContainerAbout } from "./style";

export default function Presents() {
  return (
    <ContainerAbout id="Presents">
      <div id="containerText">
        <h1> Bem-Vindo Visitante</h1>
        <p>
          Olá tudo bem? Eu me chamo Gustavo e sou Desenvolvedor{" "}
          <strong>Front-End</strong>. Criei essa página para que você possa me
          conhecher um pouco melhor.
        </p>
      </div>
      <figure>
        <img src={iconPc} alt="iconPc" />
      </figure>
    </ContainerAbout>
  );
}
