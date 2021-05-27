import styled from "styled-components";

export const ContainerSkills = styled.section`
  @media (max-width: 600px) {
    padding: 50px 0;
  }
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
  opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
  transform: ${({ isShown }) => (isShown ? "scale(1)" : "scale(0.95)")};
  transition-property: opacity, transform;
  transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};

  /* opacity: 0.5; */
  /* transform: scale(0.95); */
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
    width: 160px;
  }
  @media (min-width: 400px) {
    flex-direction: row;
    height: 400px;
    flex-wrap: wrap;
  }
`;
