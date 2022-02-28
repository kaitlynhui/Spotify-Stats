// represents the navigation bar at the top of the website


import React from "react";
import { TimeRangeButtons } from ".";
import { NavbarContainer, 
    LeftContainer, 
    RightContainer, 
    NavbarExtendedContainer, 
    InnerNavbarContainer, 
    NavbarLinkContainer, 
    NavbarLinks,  
    StyledLogoutButton, 
    StyledLogoutContainer } from "../styles/Navbar.styles";
import { Link } from "react-router-dom";
import { logout } from '../spotify';
import { StyledButton } from '../styles';


function Navbar() {
    return (
        <NavbarContainer>
            <InnerNavbarContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavbarLinks to="/"> Spotify Stats</NavbarLinks>
                    <NavbarLinks to="/top-artists"> Top Artists</NavbarLinks>
                    <NavbarLinks to="/top-tracks"> Top Tracks</NavbarLinks>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
            <StyledLogoutContainer>
                <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
                </StyledLogoutContainer>
            </RightContainer>
            </InnerNavbarContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>
        
    )
}




export default Navbar;