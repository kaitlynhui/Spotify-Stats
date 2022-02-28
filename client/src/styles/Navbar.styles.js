import styled from "styled-components";
import variables from "./variables";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
background-color: var(--near-black);
`;


export const LeftContainer = styled.div`
flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 250px;
  padding-right: 5%;
`;


export const InnerNavbarContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`;

export const NavbarLinkContainer = styled.div`
display: flex;
`;

export const NavbarLinks = styled(Link)`
color: var(--white);
font-family: var(--font);
font-size: var(--fz-lg);
font-weight: bold;
text-decoration: none;
margin: 10px;

@media (max-width: 700px) {
    display: none;
  }
`;

// export const StyledLogoutButton = styled.a`
// display: inline-block;
// background-color: var(--green);
// color: var(--white);
// border-radius: var(--border-radius-pill);
// font-weight: 700;
// font-size: var(--fz-lg);
// padding: var(--spacing-sm) var(--spacing-xl);

// &:hover,
// &:focus {
//   text-decoration: none;
//   filter: brightness(1.1);
// }
// `;

// export const StyledLogoutContainer = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 20vh;
// `;

export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display: none;
  }

`;


export const StyledLogoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLogoutButton = styled.button`
  display: inline-block;
  background-color: var(--pink);
  color: var(--white);
  border-radius: var(--border-radius-pill);
  font-weight: 700;
  font-size: var(--fz-lg);
  padding: var(--spacing-sm) var(--spacing-xl);

  &:hover,
  &:focus {
    text-decoration: none;
    filter: brightness(1.1);
  }
`;
