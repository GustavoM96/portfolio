import React from "react";
import Avatar from "../../image/Avatar.jpg";

import { ContainerAbout, ContainerInfo } from "./style";

export default function About() {
  return (
    <ContainerAbout id="About">
      <h1>Sobre</h1>
      <ContainerInfo>
        <img src={Avatar} alt="Gustavo" />
        <div id="containerText">
          <h2>Dev em constante desenvolvimento...</h2>
          <p>
            Gustavo Henrique Messias 25 anos formado em engenharia
            Elétrica-Eletônica e apaixonado pelas áreas de exatas e
            principalmente por programação{" "}
          </p>
          <p>
            Comecei a entrar a fundo na programação em outubro de 2020 ao ser
            aprovado para ser aluno da Kenzie Academy Brasil, onde pude
            desenvolver diversas hábilidades e tecnologias aplicados a projetos
          </p>
        </div>
      </ContainerInfo>
    </ContainerAbout>
  );
}
