import styled from "styled-components";
import { Frame } from "framer";

export const FrameAnima = styled(Frame)`
  @media (max-width: 800px) {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ContainerPresents = styled.section`
  @media (max-width: 930px) {
    padding: 100px 35px 50px;
    height: initial;
  }
  display: flex;
  align-items: center;
  color: var(--main-text);
  width: 90%;
  height: 100vh;
  padding: 0 35px;
  max-height: 1000px;
  min-height: 400px;
  @media (max-width: 710px) {
    padding: 100px 0px 50px;
  }
  #content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 590px) {
      flex-direction: column;
      align-items: center;
    }
  }
  #containerText {
    @media (max-width: 930px) {
      min-width: 310px;
    }
    @media (max-width: 400px) {
      margin: 0;
    }
    h1 {
      font-size: 3rem;
      width: 14ch;
      animation: ${({ isShown }) =>
        isShown ? " typing 20s steps(14) infinite;" : "none"};
      white-space: nowrap;
      overflow: hidden;
    }
    p {
      width: 80%;
    }
    max-width: 450px;
    min-width: 370px;
    margin: 0 25px 0 0;
    width: 60%;
  }
`;

export const ContainerMove = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin: 80px 0 0;

  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
  }

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

    :hover {
      cursor: move;
    }
    img {
      height: 90%;
      pointer-events: none;
      animation: ${({ isShown }) =>
        isShown ? "rotate 10s linear infinite alternate" : "none"};
      transform: rotate(0deg);
      transition: transform 5s linear;
    }
  }
`;
