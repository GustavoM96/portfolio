import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ContainerProjects = styled.section`
  @media (max-width: 600px) {
    padding: 50px 0;
  }
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;

  h1 {
    text-align: center;
  }
  img {
    box-shadow: 0 0 2px white;
  }
`;

export const Animation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
  transform: ${({ isShown }) =>
    isShown ? " translateY(0)" : " translateY(10%)"};
  transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};
  transition-property: opacity, transform;
`;

export const ContainerList = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContainerButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0008;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  text-align: right;
  display: none;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;

  button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--main-text);
    :hover {
      color: var(--secundary-text);
    }
    .icon {
      width: 35px;
      height: 35px;
    }
  }
`;

export const ProjectCard = styled.div`
  width: 210px;
  margin: 15px 15px;
  figure {
    position: relative;
    width: 100%;
    height: 80%;

    :hover #containerButton {
      display: flex;
    }
    figcaption {
      font-size: 1.3rem;
    }

    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 2px white;
    }
  }
`;

export const CarouselStyled = styled(Carousel)`
  width: 100%;
  min-width: 300px;
  margin-top: 25px;
  justify-content: flex-end;
  .rec-item-wrapper {
    &:hover {
      cursor: move;
    }
  }

  figure {
    width: 100%;
    margin: 0;
    text-align: center;

    img {
      width: 100%;
      border-radius: 10px;
      pointer-events: none;
    }
  }
`;
