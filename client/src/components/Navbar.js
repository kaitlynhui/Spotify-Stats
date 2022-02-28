// represents the navigation bar at the top of the website

import { React, useState } from "react";
import { TimeRangeButtons } from ".";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  InnerNavbarContainer,
  NavbarLinkContainer,
  NavbarLinks,
  StyledLogoutButton,
  StyledLogoutContainer,
  OpenLinksButton,
  NavbarLinkExtended,
  ExtendedStyledLogoutButton
} from "../styles/Navbar.styles";
import { Link } from "react-router-dom";
import { logout } from "../spotify";
import { StyledButton } from "../styles";

function Navbar() {
  const [extendNavBar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavBar}>
      <InnerNavbarContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLinks to="/"> Spotify Stats</NavbarLinks>
            <NavbarLinks to="/top-artists"> Top Artists</NavbarLinks>
            <NavbarLinks to="/top-tracks"> Top Tracks</NavbarLinks>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavBar ? <> &#10005;</> : <> &#8801; </>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <StyledLogoutContainer>
            <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
          </StyledLogoutContainer>
        </RightContainer>
      </InnerNavbarContainer>
      {extendNavBar && (
          <NavbarExtendedContainer>
        <NavbarLinkExtended to="/"> Spotify Stats</NavbarLinkExtended>
        <NavbarLinkExtended to="/top-artists"> Top Artists</NavbarLinkExtended>
        <NavbarLinkExtended to="/top-tracks"> Top Tracks</NavbarLinkExtended>
        <ExtendedStyledLogoutButton onClick={logout}>Logout</ExtendedStyledLogoutButton>
      </NavbarExtendedContainer>)}
    </NavbarContainer>
  );
}

export default Navbar;
