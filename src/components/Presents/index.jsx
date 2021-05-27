import React, { useEffect, useState } from "react";
import iconPc from "../../image/astro2.png";
import { ContainerPresents, FrameAnima, ContainerMove } from "./style";
import { Frame } from "framer";
import { useObserver } from "../../services/intersectionObserver";

export default function Presents() {
  const marginRoot = 0;
  const [getStarMan, setgetStarMan] = useState(false);

  const [isShown, setisShown] = useState(false);

  const loadComponent = useObserver(setisShown, marginRoot);

  useEffect(() => {
    loadComponent.observe(document.getElementById("Presents"));
  }, []);

  return (
    <ContainerPresents isShown={isShown} id="Presents">
      <div id="content">
        <div id="containerText">
          <h1>Hello World!!!</h1>
          <p>
            Olá ser de outro planeta. Eu sou <strong>Gustavo</strong>, o Criador
            deste mundo.
          </p>
          <p>
            Venha navegar por esta página e descubra um pouco sobre quem eu sou
            e o que eu faço.
          </p>
        </div>
        <ContainerMove isShown={isShown}>
          {!getStarMan && <p>Move!</p>}
          <FrameAnima
            onDrag={() => setgetStarMan(true)}
            // size={200}
            drag={true}
            dragConstraints={{ left: -200, right: 0, top: -100, bottom: 200 }}
            background="transparent"
          >
            <figure>
              <img src={iconPc} alt="iconPc" />
            </figure>
          </FrameAnima>
        </ContainerMove>
      </div>
    </ContainerPresents>
  );
}
