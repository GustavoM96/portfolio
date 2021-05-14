import styled from "styled-components";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  margin: 0 auto;
  padding-bottom: 25px;

  h1 {
    text-align: center;
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: center;

  align-items: center;
  img {
    width: 100%;
    margin: 5px 0;
  }
  div {
    text-align: center;
  }
  @media (min-width: 880px) {
    div {
      width: 45%;
      margin: 5px;
    }
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
