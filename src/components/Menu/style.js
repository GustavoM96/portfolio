import styled from "styled-components";

export const Menu = styled.header`
  background-color: var(--main-color);
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 90%;
  margin: 0 auto;
  height: 75px;
  ul {
    margin: 15px auto;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      cursor: pointer;
      height: 100%;
      &:hover {
        color: var(--secundary-text);
      }
    }
  }
  #item_logo {
    /* height: 50%; */
    cursor: initial;

    display: none;
    img {
      height: 45px;
    }
  }
  @media (min-width: 600px) {
    #item_logo {
      display: list-item;
    }
  }
`;
export const Empty = styled.div`
  height: 77px;
`;
