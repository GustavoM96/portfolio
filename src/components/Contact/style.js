import styled from "styled-components";

export const ContainerAbout = styled.section`
  /* background-color: var(--main-color); */
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  padding: 50px 35px;
  justify-content: space-between;

  form {
    width: 45%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    border: 1px solid var(--main-text);
    &:hover {
      box-shadow: 0 0 5px white;
    }
    :active {
      box-shadow: inset 0 0 5px gray;
    }
  }
  input {
    margin: 1px 0 20px;
    padding: 12px 16px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    background-color: transparent !important;
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
`;

export const ContainerTextInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContainerContact = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;
export const ContainerText = styled.div`
  width: 45%;
`;

export const Title = styled.label`
  margin: 0;
`;

export const Error = styled.p`
  margin: 0;
  color: red;
  font-size: 15px;
`;
