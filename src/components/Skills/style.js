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

  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    max-width: 250px;
    margin: 5px 5px 5px;
  }
  div {
    text-align: center;
    width: 30%;
    min-width: 150px;
  }
  @media (min-width: 400px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
