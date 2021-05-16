import { ContainerAbout, ContainerImages } from "./style";
import Ijs from "../../image/js.svg";
import Icss from "../../image/css.svg";
import Ihtml from "../../image/html.svg";
import Ireact from "../../image/react.svg";
import Iredux from "../../image/redux.svg";
import Igit from "../../image/git.svg";
import Carousel from "react-elastic-carousel";
import { useState } from "react";

export default function Skills() {
  return (
    <ContainerAbout id="Skills">
      <h1>Habilidades</h1>

      <ContainerImages>
        <div>
          <img src={Ihtml} alt="html" />
          <figcaption>Html</figcaption>
        </div>

        <div>
          <img src={Icss} alt="css" />
          <figcaption>Css</figcaption>
        </div>

        <div>
          <img src={Ijs} alt="js" />
          <figcaption>JavaScript</figcaption>
        </div>

        <div>
          <img src={Ireact} alt="React" />
          <figcaption>React</figcaption>
        </div>

        <div>
          <img src={Iredux} alt="Redux" />
          <figcaption>Redux</figcaption>
        </div>

        <div>
          <img src={Igit} alt="Git" />
          <figcaption>Git</figcaption>
        </div>
      </ContainerImages>
    </ContainerAbout>
  );
}
