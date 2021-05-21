import React, { useState } from "react";
import Logo from "../../image/Logo.svg";
import { Menu } from "./style";
import { Link } from "react-scroll";
import ComputerIcon from "@material-ui/icons/Computer";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ListIcon from "@material-ui/icons/List";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function ButtonAppBar() {
  const links = [
    { to: "Presents", title: "Início", icon: HomeIcon },
    { to: "About", title: "Sobre", icon: InfoIcon },
    { to: "Skills", title: "Techs", icon: ComputerIcon },
    { to: "Projects", title: "Projetos", icon: ListIcon },
    { to: "Contact", title: "Contato", icon: AlternateEmailIcon },
  ];
  const [moveSubject, setmoveSubject] = useState(1);
  return (
    <>
      <Menu>
        <img id="item_logo" src={Logo} alt="logo" />
        <ul>
          {links.map((link) => (
            <li>
              <Link
                className="link"
                activeClass="active"
                to={link.to}
                spy={true}
                offset={-30}
                smooth={true}
                duration={1500}
              >
                {React.createElement(link.icon)}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </>
  );
}
