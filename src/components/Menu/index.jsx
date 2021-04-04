import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../image/Logo.svg";
import { Menu, Empty } from "./style";
import { Link } from "react-scroll";

export default function ButtonAppBar() {
  return (
    <>
      <Empty></Empty>
      <AppBar color={"transparent"} position="fixed">
        <Menu>
          <Toolbar>
            <ul>
              <li id="item_logo">
                <img src={Logo} alt="logo" />
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Presents"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={1500}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={1500}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={1500}
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={1500}
                >
                  Projetos
                </Link>
              </li>
            </ul>
          </Toolbar>
        </Menu>
      </AppBar>
    </>
  );
}
