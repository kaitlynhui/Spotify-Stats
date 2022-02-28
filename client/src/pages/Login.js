import React from "react";

import styled from 'styled-components/macro';
import { StyledButton } from '../styles';


const StyledLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const StyledTitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://statistcs-for-spotify.herokuapp.com/login';

const Login = () => (
  <>
  <StyledTitleContainer>
    <h1>Spotify stats!</h1>
    <p>Log in to view your top tracks and artists on Spotify!</p>
    </StyledTitleContainer>
    <StyledLoginContainer>
    <StyledButton href={LOGIN_URI}>
      Login to Spotify
    </StyledButton>
  </StyledLoginContainer>
  </>
);

export default Login;