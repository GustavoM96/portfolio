import { ContainerAbout, CarouselStyled } from "./style";
import Lig4 from "../../image/lig4.png";
import Login from "../../image/login.png";
import RickPok from "../../image/rickPok.png";
import StarWars from "../../image/starWars.png";
import Carousel from "react-elastic-carousel";
import { useState } from "react";

export default function Projects() {
  const projectList = [
    { id: 1, title: "Lig4", image: Lig4 },
    { id: 2, title: "StarWars", image: StarWars },
    { id: 3, title: "Api do Rick e Pokemon", image: RickPok },
  ];
  const [projects, setProjects] = useState(projectList);
  return (
    <ContainerAbout id="Projects">
      <h1>Portfólio</h1>
      <CarouselStyled itemPadding={[0, 50]} transitionMs={1500}>
        {projects.map((project) => (
          <figure key={project.id}>
            <img src={project.image} alt={project.title} />
            <figcaption>{project.title}</figcaption>
          </figure>
        ))}
      </CarouselStyled>
    </ContainerAbout>
  );
}
