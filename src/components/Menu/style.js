import styled from "styled-components";

export const Menu = styled.header`
  position: fixed;
  z-index: 2;
  right: 0;
  color: var(--main-text);
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
  img {
    height: 45px;
  }
  #containerButton {
    display: none;
    width: 100px;
    height: 100%;
    align-items: center;
    justify-content: center;
    button {
      width: 30px;
      height: 30px;
      padding: 0;

      color: white;
      background-color: transparent;
      border: 1px solid white;
      border-radius: 5px;
    }
    :active {
    }
  }

  @media (max-width: 930px) {
    background-color: #000e;
    width: 100%;
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    img {
      margin: 0 0 0 50px;
    }
    ul {
      width: 40%;
      min-width: 300px;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 50px 0 0;
    }
  }
  @media (max-width: 586px) {
    height: 50px;

    img {
      margin: 0 0 0 35px;
      height: 25px;
    }
    ul {
      display: ${({ activeMenu }) => (activeMenu ? "flex" : "none")};

      position: absolute;
      right: 0;
      top: 50px;
      width: 10%;
      min-width: 100px;
      flex-direction: column;
      justify-content: space-between;
      margin: 0;
      background-color: #000d;
      border-radius: 0 0 0 10px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;

      li {
        margin: 8px 0;
      }
    }
    #containerButton {
      display: flex;
    }
  }
`;
