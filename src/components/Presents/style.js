import styled from "styled-components";
import { Frame } from "framer";

export const FrameAnima = styled(Frame)``;

export const ContainerPresents = styled.section`
  color: var(--main-text);
  width: 90%;
  height: 100vh;
  padding: 0 35px;
  max-height: 1000px;
  /* box-sizing: border-box; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  p {
    width: 70%;
  }

  h1 {
    font-size: 3rem;
    width: 14ch;
    animation: typing 20s steps(14) infinite;
    white-space: nowrap;
    overflow: hidden;
  }

  button {
    margin: 0 5px 15px;
    padding: 5px;
    width: 45%;
    outline: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px white;
    }
  }
  #containerText {
    max-width: 450px;
    /* border: 1px solid white;
    box-shadow: 0 0 10px white;
    border-radius: 10px; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    padding: 25px;
  }
  @media (min-width: 600px) {
    img {
      display: block;
    }
  }
`;

export const ContainerMove = styled.div`
  /* border: 1px solid white; */
  width: 200px;
  height: 200px;
  position: relative;

  p {
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    transform: translateY(-150%);
    margin: 0;
    position: absolute;
    :before {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 20px;
      transform: translateY(100%);

      z-index: 1;
      border: solid 10px transparent;
      border-top-color: #fff;
    }
  }
  figure {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      :hover {
        cursor: move;
      }
    }
  }
`;
