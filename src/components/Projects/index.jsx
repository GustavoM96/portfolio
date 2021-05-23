import {
  ContainerProjects,
  ContainerButton,
  CarouselStyled,
  ProjectCard,
  ContainerList,
} from "./style";
import Lig4 from "../../image/lig4.png";
import RickPok from "../../image/rickPok.png";
import StarWars from "../../image/starWars.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Lig4",
      image: Lig4,
      url: "https://gustavo.hmessias96.gitlab.io/lig4/",
    },
    {
      id: 2,
      title: "StarWars",
      image: StarWars,
      url: "https://gustavo.hmessias96.gitlab.io/jogo_azar/",
    },
    {
      id: 3,
      title: "RikPok Api",
      image: RickPok,
      url: "https://colecao-poke-rick.vercel.app/rick",
    },
  ];
  let carrousel;
  function goToPage(url) {
    window.open(url);
  }
  const handleImage = (numImage) => {
    carrousel.goTo(numImage - 1);
  };

  const [imageNum, setimageNum] = useState(0);
  return (
    <ContainerProjects id="Projects">
      <h1>Portfólio</h1>
      <CarouselStyled
        ref={(ref) => (carrousel = ref)}
        itemPadding={[2, 50]}
        transitionMs={1500}
      >
        {projects.map((project) => (
          <figure key={project.id}>
            <img src={project.image} alt={project.title} />
          </figure>
        ))}
      </CarouselStyled>
      <ContainerList>
        {projects.map((project) => (
          <ProjectCard>
            <figure key={project.id}>
              <img src={project.image} alt={project.title} />
              <ContainerButton id="containerButton">
                <button onClick={() => handleImage(project.id)}>
                  <LiveTvIcon className="icon" />
                </button>
                <button onClick={() => goToPage(project.url)}>
                  <VisibilityIcon className="icon" />
                </button>
              </ContainerButton>
              <figcaption>{project.title}</figcaption>
            </figure>
          </ProjectCard>
        ))}
      </ContainerList>
    </ContainerProjects>
  );
}
