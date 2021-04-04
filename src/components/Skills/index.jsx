import { ContainerAbout, ContainerImages } from "./style";
import Ijs from "../../image/js.svg";
import Icss from "../../image/css.svg";
import Ihtml from "../../image/html.svg";
import Ireact from "../../image/react.svg";
import Iredux from "../../image/redux.svg";
import Igit from "../../image/git.svg";

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
          <figcaption>Javacript</figcaption>
        </div>

        <div>
          <img src={Ireact} alt="html" />
          <figcaption>React</figcaption>
        </div>

        <div>
          <img src={Iredux} alt="css" />
          <figcaption>Redux</figcaption>
        </div>

        <div>
          <img src={Igit} alt="js" />
          <figcaption>Git</figcaption>
        </div>
      </ContainerImages>
    </ContainerAbout>
  );
}
