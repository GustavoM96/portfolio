import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ContainerProjects = styled.section`
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;
  justify-content: space-between;

  h1 {
    text-align: center;
  }
  img {
    box-shadow: 0 0 2px white;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  /* justify-content: space-around; */
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
  justify-content: space-around;
  border-radius: 10px;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--main-text);
    :hover {
      color: var(--secundary-text);
    }
    .icon {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ProjectCard = styled.div`
  width: 216px;
  margin: 10px 10px;
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
