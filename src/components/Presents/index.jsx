import React, { useState } from "react";
import iconPc from "../../image/astro2.png";
import { ContainerPresents, FrameAnima, ContainerMove } from "./style";
import { Frame } from "framer";

export default function Presents() {
  const [getStarMan, setgetStarMan] = useState(false);

  return (
    <ContainerPresents id="Presents">
      <div id="containerText">
        <h1>Hello World!!!</h1>
        <p>
          Olá ser de outro planeta. Eu sou <strong>Gustavo</strong>, o Criador
          deste mundo.
        </p>
        <p>
          Venha navegar por esta página e descubra um pouco sobre quem eu sou e
          o que eu faço.
        </p>
      </div>
      <ContainerMove>
        {!getStarMan && <p>Move!</p>}
        <figure>
          <FrameAnima
            onDrag={() => setgetStarMan(true)}
            animate={{ rotate: [0, 45] }}
            transition={{
              duration: 10,
              yoyo: Infinity,
            }}
            size={200}
            drag={true}
            dragConstraints={{ left: -200, right: 0, top: -100, bottom: 200 }}
            background="transparent"
          >
            <img src={iconPc} alt="iconPc" />
          </FrameAnima>
        </figure>
      </ContainerMove>
    </ContainerPresents>
  );
}
