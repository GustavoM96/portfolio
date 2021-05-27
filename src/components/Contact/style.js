import styled from "styled-components";

export const ContainerContact = styled.section`
  margin-top: 25px;
  display: flex;
  color: var(--main-text);
  width: 90%;
  padding: 50px 35px;
  display: flex;
  @media (max-width: 586px) {
    padding: 50px 0px;

    justify-content: center;
    align-items: center;
  }
  #content {
    width: 100%;

    display: flex;
    justify-content: space-between;
    @media (max-width: 586px) {
      width: 70%;
      flex-direction: column-reverse;
    }
  }

  h1 {
    text-align: center;
  }
  button {
    font-size: 16px;
    font-weight: bolder;
    padding: 12px 16px;
    width: 150px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    background-color: var(--main-text);
    color: var(--main-color);
    border: 2px solid var(--main-text);
    &:hover {
      box-shadow: 0 0 5px white;
    }
    :active {
      box-shadow: inset 0 0 15px gray;
    }
    &:disabled {
      box-shadow: inset 0 0 15px gray;
      cursor: default;
    }
  }
  input {
    margin: 1px 0 20px;
    padding: 12px 16px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    color: var(--main-text);
    border: 1px solid var(--main-text);
    &:hover {
      box-shadow: 0 0 5px white;
    }
    :focus {
      box-shadow: inset 1px 1px 5px white;
    }
  }

  textarea {
    margin: 1px 0 15px;
    padding: 12px 16px;
    width: 100%;
    height: 125px;
    resize: none;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    color: var(--main-text);
    border: 1px solid var(--main-text);
    &:hover {
      box-shadow: 0 0 5px white;
    }
    :focus {
      box-shadow: inset 1px 1px 5px white;
    }
  }
  form {
    opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
    transform: ${({ isShown }) =>
      isShown ? " translateX(0)" : " translateX(-15%)"};
    transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};
    transition-property: opacity, transform;

    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 586px) {
      width: 100%;
    }
  }
`;

export const ContainerTextInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContainerText = styled.div`
  opacity: ${({ isShown }) => (isShown ? "1" : "0.5")};
  transform: ${({ isShown }) =>
    isShown ? " translateX(0)" : " translateX(15%)"};
  transition-duration: ${({ isShown }) => (isShown ? "2s" : "2s")};
  transition-property: opacity, transform;

  width: 45%;
  @media (max-width: 586px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const Title = styled.label`
  margin: 0;
  font-size: 1.1rem;
`;

export const Error = styled.p`
  margin: 0;
  color: red;
  font-size: 15px;
`;
