import styled from "styled-components";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  margin: 0 auto;
  padding: 100px 35px;
  display: flex;
  justify-content: space-between;
  #containerButtons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
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

    position: relative;

    img {
      @keyframes rotate {
        0% {
          transform: translateY(0%) rotate(0deg);
        }
        100% {
          transform: translateY(30%) rotate(45deg);
        }
      }
      position: absolute;
      left: 0;
      animation: rotate ease-in-out 10s infinite alternate;
      width: 100%;
    }
  }
  #containerText {
    max-width: 350px;
  }
  #linkdIn {
    background-color: white;
    color: var(--main-color);
    border: none;
  }
  #Git-Hub {
    background-color: transparent;
    color: var(--main-text);
    border: 1px solid var(--main-text);
  }
  @media (min-width: 600px) {
    img {
      display: block;
    }
  }
`;
