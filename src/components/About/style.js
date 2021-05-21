import styled from "styled-components";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
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
    max-width: 350px;
    width: 40%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  #containerText {
    max-width: 350px;
  }
  @media (min-width: 650px) {
    flex-direction: row-reverse;
  }
`;
