import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 130px 0 40px;
  max-width: 850px;
  @media (max-width: 930px) {
    padding: 0 40px;
  }
  @media (max-width: 520px) {
    padding: 0;
  }
`;
export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
