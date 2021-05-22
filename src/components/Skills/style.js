import styled from "styled-components";

export const ContainerAbout = styled.section`
  color: var(--main-text);
  /* height: 100vh; */
  width: 90%;
  padding: 50px 35px;
  justify-content: space-between;

  h1 {
    text-align: center;
  }
`;

export const Animation = styled.div`
  animation: ${({ isShown }) =>
    isShown ? "showFoward 1.5s  forwards" : "none"};
  opacity: 0.5;
  transform: scale(0.9);
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 0;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    max-width: 250px;
    margin: 5px 5px 5px;
    transition: transform 1.5s;
    :hover {
      transform: translateY(-25px);
    }
  }
  div {
    text-align: center;
  }
  @media (min-width: 400px) {
    flex-direction: row;
    height: 400px;
    flex-wrap: wrap;
  }
`;
