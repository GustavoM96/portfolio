import styled from "styled-components";

export const ContainerModal = styled.div`
  max-width: 400px;
  h1 {
    color: var(--main-text);
    font-size: 1.5rem;
  }
  p {
    font-weight: bold;
    font-size: 1rem;
    word-wrap: break-word;
    margin: 6px 0;
  }
`;

export const ContainerButton = styled.div`
  text-align: center;
  padding: 50px 5px 0;
  button {
    align-self: center;
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
`;

export const Message = styled.div`
  margin-top: 20px;
  border-top: 2px solid var(--main-text);
  border-bottom: 2px solid var(--main-text);

  border-radius: 10px;
  padding: 20px 10px;
  p {
    font-weight: lighter;
    color: var(--main-text);
    font-size: 0.9rem;
  }
`;

export const ContainerTitle = styled.div`
  color: #fff;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    margin-bottom: 0;
  }
  img {
    margin: ${({ cancel }) => (cancel ? "15px " : "none")};
  }
`;
