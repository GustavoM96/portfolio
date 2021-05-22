import React from "react";
import iconPc from "../../image/astro2.png";
import { ContainerPresents, FrameAnima } from "./style";
import { Frame } from "framer";

export default function Presents() {
  return (
    <ContainerPresents id="Presents">
      <div id="containerText">
        <h1> Bem-Vindo Visitante</h1>
        <p>
          Olá tudo bem? Eu me chamo Gustavo e sou Desenvolvedor{" "}
          <strong>Front-End</strong>. Criei essa página para que você possa me
          conhecher um pouco melhor.
        </p>
      </div>
      <figure>
        <FrameAnima
          animate={{ rotate: [0, 45], y: [0, 40] }}
          transition={{
            duration: 10,
            yoyo: Infinity,
          }}
          size={200}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          background="transparent"
        >
          <img src={iconPc} alt="iconPc" />
        </FrameAnima>
      </figure>
    </ContainerPresents>
  );
}
