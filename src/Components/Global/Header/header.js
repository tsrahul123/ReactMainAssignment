import React from "react";
import "./header.css";
import carIcon from "../../../assets/images/Logo-2.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const header = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={require("../../../assets/images/Logo-2.png")} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle className="text-black">
          COURSES
        </NavLink>
        <NavLink to="/shoppingcart" activeStyle>
          <img
            src={require("../../../assets/images/shopping-cart.svg")}
            alt="logo"
          />
        </NavLink>
        <NavLink to="/profile" activeStyle>
          <img
            src={require("../../../assets/images/noun_profile_2068277.svg")}
            alt="logo"
          />
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
    </Nav>
  );
};

export default header;
