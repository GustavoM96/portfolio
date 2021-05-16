import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../image/Logo.svg";
import { Menu, Empty } from "./style";
import { Link } from "react-scroll";
import { Star } from "../backGround/style";
import ComputerIcon from "@material-ui/icons/Computer";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ListIcon from "@material-ui/icons/List";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

export default function ButtonAppBar() {
  const [moveSubject, setmoveSubject] = useState(1);
  return (
    <>
      <Menu>
        <img id="item_logo" src={Logo} alt="logo" />
        <ul>
          <li>
            <Link
              // onClick={}
              className="link"
              activeClass="active"
              to="Presents"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <HomeIcon />
              Início
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <InfoIcon />
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <ComputerIcon />
              Techs
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <ListIcon />
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <AlternateEmailIcon />
              Contatos
            </Link>
          </li>
        </ul>
      </Menu>
    </>
  );
}
