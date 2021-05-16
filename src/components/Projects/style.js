import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  margin: 0 auto;
  padding: 50px 35px;
  justify-content: space-between;

  h1 {
    text-align: center;
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
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
    }
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: space-between;

  align-items: center;
  img {
    width: 100%;
    margin: 5px 0;
  }
  div {
    text-align: center;
  }
  @media (min-width: 880px) {
    div {
      width: 45%;
      margin: 5px;
    }
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
