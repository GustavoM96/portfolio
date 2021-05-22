import styled from "styled-components";
import { Frame } from "framer";

export const FrameAnima = styled(Frame)``;

export const ContainerPresents = styled.section`
  color: var(--main-text);
  width: 90%;
  padding: 100px 35px;
  display: flex;
  justify-content: space-between;

  button {
    margin: 0 5px 15px;
    padding: 5px;
    width: 45%;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px white;
    }
  }
  figure {
    width: 200px;

    img {
      width: 100%;
      :hover {
        cursor: move;
      }
    }
  }
  #containerText {
    max-width: 350px;
  }
  @media (min-width: 600px) {
    img {
      display: block;
    }
  }
`;
