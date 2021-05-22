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
`;
export const ContainerIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  figure {
    width: 40px;
    height: 40px;
    margin: 0 0 0 25px;
    :hover img {
      transform: scale(1.1);
    }
    cursor: pointer;

    img {
      width: 100%;
      transition: transform 1s;
    }
  }
`;
