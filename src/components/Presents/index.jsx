import React from "react";
import { useState } from "react";
import iconPc from "../../image/astro2.png";

import { ContainerAbout } from "./style";

export default function Presents() {
  function linkdIn() {
    window.open("https://www.linkedin.com/in/gustavo-messias/");
  }
  function GitLab() {
    window.open("https://gitlab.com/gustavo.hmessias96/");
  }
  function GitHub() {
    window.open("https://github.com/GustavoM96/");
  }

  return (
    <ContainerAbout id="Presents">
      <div id="containerText">
        <h1>Bem-Vindo Visitante</h1>
        <p>
          Olá tudo bem? Eu me chamo Gustavo e sou Desenvolvedor{" "}
          <strong>Front-End</strong>. Criei essa página para que você possa me
          conhecher um pouco melhor.
        </p>
        <div id="containerButtons">
          <button onClick={GitLab} id="Git-Hub">
            Git-Lab
          </button>
          <button onClick={GitHub} id="Git-Hub">
            Git-Hub
          </button>
          <button onClick={linkdIn} id="linkdIn">
            LinkdIn
          </button>
        </div>
      </div>
      <figure>
        <img src={iconPc} alt="iconPc" />
      </figure>
    </ContainerAbout>
  );
}
