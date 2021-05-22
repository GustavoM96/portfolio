import React from "react";
import { TitleFooter, ContainerIcons, ContainerFooter } from "./style";
import gitHub from "../../image/gitHub.svg";
import gitLab from "../../image/gitLab.svg";
import linkedin from "../../image/linkedin.svg";
export default function Footer() {
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
    <ContainerFooter>
      <TitleFooter>© Copyright 2021 - Gustavo Messias</TitleFooter>
      <ContainerIcons>
        <figure onClick={linkdIn}>
          <img src={linkedin} alt="linkedin" />
        </figure>
        <figure onClick={GitHub}>
          <img src={gitHub} alt="gitHub" />
        </figure>
        <figure onClick={GitLab}>
          <img src={gitLab} alt="gitLab" />
        </figure>
      </ContainerIcons>
    </ContainerFooter>
  );
}
