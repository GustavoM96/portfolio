import React from "react";
import iconPc from "../../image/astro2.png";
import { ContainerPresents, FrameAnima } from "./style";
import { Frame } from "framer";

export default function Presents() {
  return (
    <ContainerPresents id="Presents">
      <div id="containerText">
        <h1>Hello World!!!</h1>
        <p>
          Olá ser de outro planeta. Eu sou <strong>Gustavo</strong>, o Criador
          deste mundo.
        </p>
        <p>
          Venha navegar por está página e descubra um pouco sobre quem eu sou e
          o que eu faço.
        </p>
      </div>
      <figure>
        <FrameAnima
          animate={{ rotate: [0, 45] }}
          transition={{
            duration: 10,
            yoyo: Infinity,
          }}
          size={200}
          drag={true}
          dragConstraints={{ left: -200, right: 100, top: -100, bottom: 200 }}
          background="transparent"
        >
          <img src={iconPc} alt="iconPc" />
        </FrameAnima>
      </figure>
    </ContainerPresents>
  );
}
