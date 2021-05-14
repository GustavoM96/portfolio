import styled from "styled-components";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  margin: 0 auto;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
  #containerButtons {
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
  button {
    padding: 5px;
    width: 45%;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 5px white;
    }
  }
  img {
    max-width: 500px;
    width: 45%;
    display: none;
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
