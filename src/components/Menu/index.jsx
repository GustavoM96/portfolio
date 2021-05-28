import React, { useState } from "react";
import Logo from "../../image/Logo.svg";
import { ContainerButton, Menu } from "./style";
import { Link } from "react-scroll";
import ComputerIcon from "@material-ui/icons/Computer";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ListIcon from "@material-ui/icons/List";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
export default function ButtonAppBar() {
  const links = [
    { to: "Presents", title: "Início", icon: HomeIcon },
    { to: "About", title: "Sobre", icon: InfoIcon },
    { to: "Skills", title: "Techs", icon: ComputerIcon },
    { to: "Projects", title: "Projetos", icon: ListIcon },
    { to: "Contact", title: "Contato", icon: AlternateEmailIcon },
  ];
  const [activeMenu, setactiveMenu] = useState(false);

  return (
    <>
      <Menu activeMenu={activeMenu}>
        <img src={Logo} alt="logo" />
        <ul>
          {links.map((link, key) => (
            <li key={key}>
              <Link
                className="link"
                activeClass="active"
                to={link.to}
                spy={true}
                offset={-30}
                smooth={true}
                duration={1000}
              >
                {React.createElement(link.icon)}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <ContainerButton>
          <button onClick={() => setactiveMenu(!activeMenu)}>
            {activeMenu ? <ClearIcon /> : <MenuIcon />}
          </button>
        </ContainerButton>
      </Menu>
    </>
  );
}
