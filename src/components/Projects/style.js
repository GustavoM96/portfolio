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
