import styled from "styled-components";

export const ContainerAbout = styled.section`
  @media (max-width: 710px) {
    padding: 50px 0;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;
  h1 {
    text-align: center;
  }
`;

export const ContainerInfo = styled.div`
  @media (max-width: 710px) {
    width: 280px;
  }
  width: 100%;

  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin-top: 25px;
  figure {
    opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
    transform: ${({ isShown }) =>
      isShown ? " translateX(0)" : " translateX(15%)"};
    transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};
    transition-property: opacity, transform;
    min-width: 250px;
    width: 40%;
    @media (max-width: 400px) {
      transform: none;
    }

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 2px white;
      @media (max-width: 790px) {
        width: 280px;
        margin-bottom: 10px;
      }
    }
  }
  #containerText {
    opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
    transform: ${({ isShown }) =>
      isShown ? " translateX(0)" : " translateX(-15%)"};
    transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};
    transition-property: opacity, transform;
    @media (max-width: 400px) {
      transform: ${({ isShown }) =>
        isShown ? " translateX(0)" : " translateX(-5%)"};
    }
    margin: 0 25px 0 0;
    max-width: 350px;
    @media (max-width: 790px) {
      width: 280px;
    }
  }
`;

/* animation: ${({ isShown }) =>
  isShown ? "showLeft 2s  forwards" : "none"}; */
/* opacity: 0.5; */
/* transform: translateX(-15%); */
/* width: 50%; */
