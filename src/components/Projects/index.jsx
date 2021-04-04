import { ContainerAbout, ContainerImages } from "./style";
import lig4 from "../../image/lig4.png";
import login from "../../image/login.png";
import rickPok from "../../image/rickPok.png";
import starWars from "../../image/starWars.png";

export default function Projects() {
  return (
    <ContainerAbout id="Projects">
      <h1>Projetos</h1>
      <ContainerImages>
        <div>
          <figcaption>Lig4</figcaption>
          <img src={lig4} alt="lig4" />
        </div>
        <div>
          <figcaption>starWars</figcaption>
          <img src={starWars} alt="starWars" />
        </div>
        <div>
          <figcaption>Kenzie Hub</figcaption>
          <img src={login} alt="login" />
        </div>
        <div>
          <figcaption>Api do Rick e Pokemon</figcaption>
          <img src={rickPok} alt="rickPok" />
        </div>
      </ContainerImages>
    </ContainerAbout>
  );
}
