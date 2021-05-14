import React from "react";
import { useState } from "react";
import iconPc from "../../image/iconPc.svg";

import { ContainerAbout } from "./style";

export default function Presents() {
  function linkdIn() {
    window.open("https://www.linkedin.com/in/gustavo-messias/");
  }
  function GitLab() {
    window.open("https://gitlab.com/gustavo.hmessias96/");
  }

  return (
    <ContainerAbout id="Presents">
      <div id="containerText">
        <h1>Bem Vindo a minha Página</h1>
        <p>
          Olá me chamo Gustavo e sou Dev Front-End. Aqui terá um pouco sobre mim
          e minha trajetória{" "}
        </p>
        <div id="containerButtons">
          <button onClick={linkdIn} id="linkdIn">
            LinkdIn
          </button>
          <button onClick={GitLab} id="Git-Hub">
            Git-Lab
          </button>
        </div>
      </div>
      <img src={iconPc} alt="iconPc" />
    </ContainerAbout>
  );
}
