import React from "react";
import { useNavigate } from "react-router-dom";

import {
  NavBarContainer,
  NavBarLogo,
  NavBarTitle,
  NavbarWrapper,
} from "./NavBar.styles";

const NavBar = () => {
  let navigate = useNavigate();
  console.log(window.location.host);
  return (
    <NavbarWrapper>
      <NavBarContainer>
        <NavBarLogo onClick={() => navigate("/")} />
        <NavBarTitle>NTRS - NASA Technical Reports Search</NavBarTitle>
      </NavBarContainer>
    </NavbarWrapper>
  );
};

export default NavBar;
