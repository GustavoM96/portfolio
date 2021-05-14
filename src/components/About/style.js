import styled from "styled-components";

export const ContainerAbout = styled.header`
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

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    max-width: 350px;
    width: 100%;
    margin: 5px;

    border-radius: 15px;
  }
  #containerText {
    max-width: 350px;
  }
  @media (min-width: 650px) {
    flex-direction: row-reverse;
  }
`;
