import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ContainerProjects = styled.section`
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  h1 {
    text-align: center;
  }
  img {
    box-shadow: 0 0 2px white;
  }
`;

export const Animation = styled.div`
  animation: ${({ isShown }) =>
    isShown ? "showFoward 1.5s  forwards" : "none"};
  opacity: 0.5;
  transform: scale(0.9);
`;

export const ContainerList = styled.div`
  /* width: 80%; */

  opacity: 0.5;

  transform: translateY(20%);
  animation: ${({ isShown }) => (isShown ? "showUp 1s  forwards" : "none")};
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ContainerButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000b;
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
  /* height: 500px; */
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
    }
  }
`;
