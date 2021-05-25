import styled from "styled-components";

export const ContainerAbout = styled.section`
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;
  h1 {
    text-align: center;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  figure {
    animation: ${({ isShown }) =>
      isShown ? "showRight 2s  forwards" : "none"};
    opacity: 0.5;
    transform: translateX(15%);
    max-width: 350px;
    width: 40%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  #containerText {
    animation: ${({ isShown }) => (isShown ? "showLeft 2s  forwards" : "none")};
    opacity: 0.5;
    transform: translateX(-15%);
    max-width: 350px;
  }
  @media (min-width: 650px) {
    flex-direction: row-reverse;
  }
`;
