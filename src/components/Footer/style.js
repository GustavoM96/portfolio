import styled from "styled-components";

export const TitleFooter = styled.p`
  text-align: center;
  font-size: 1rem;
  margin: 0;
`;
export const ContainerFooter = styled.footer`
  width: 90%;
  padding: 10px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 586px) {
    flex-direction: column-reverse;
    padding: 10px 0px;
  }
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  figure {
    width: 40px;
    height: 40px;
    margin: 0 0 0 25px;
    cursor: pointer;
    @media (max-width: 586px) {
      margin: 0 10px 10px 25px;
    }
    :hover img {
      transform: scale(1.05);
    }

    img {
      width: 100%;
    }
  }
`;
