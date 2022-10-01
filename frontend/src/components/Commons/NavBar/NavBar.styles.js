import styled from "styled-components";
import nasaLogo from "../../../assets/nasa-logo.png"


export const NavbarWrapper = styled.nav`
height: 80px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(46, 44, 44, 0.8);
`

export const NavBarTitle = styled.p`
margin: 0;
padding: 0;
font-size: 36px;
color: white;
font-weight: 700;`

export const NavBarLogo = styled.div`
height: 57.28px;
width: 70px;
background: url(${nasaLogo}) center no-repeat;
background-size: 100%;
`
export const NavBarContainer = styled.div`
padding: 0 auto;
width: 100%;
height: 100%;
max-width: 800px;
display: flex;
justify-content: space-between;
align-items: center;`