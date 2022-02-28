import styled from "styled-components";

export const HomeContainter = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 75px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    display: block;
    max-width: 1140px;
    color: pink;
`;

export const HomeBanner = styled.div`
margin-bottom: 2rem;
box-sizing: border-box;
padding: 2rem-1rem;
border-radius: 0%.3rem;
`;

export const HomeText = styled.h1`
text-align: center;
color: var(--white);
border-radius: var(--border-radius-pill);
font-weight: 700;
font-size: var(--fz-xxxl);
padding: var(--spacing-sm) var(--spacing-xl);
`;

export const HomeH2 = styled.h2`
text-align: center;
color: var(--white);
border-radius: var(--border-radius-pill);
font-weight: 500;
font-size: var(--fz-xxl);
padding: var(--spacing-sm) var(--spacing-xl);
`;

export const HomeButtonContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

export const HomeTable = styled.table`
text-align: center;
`;

export default HomeContainter;