import styled from "styled-components";

export const Menu = styled.header`
  position: fixed;
  right: 0;
  color: var(--main-text);
  border-bottom: 2px solid var(--secundary-text);
  width: 120px;
  height: 100vh;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 15px auto;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    li {
      font-size: 12px;
      margin: 10px 0;
      cursor: pointer;
      height: 40px;
      &:hover {
        color: var(--secundary-text);
      }
      .link {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  #item_logo {
    height: 45px;
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
