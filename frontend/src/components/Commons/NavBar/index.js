import React from 'react'
import { NavBarContainer, NavBarLogo, NavBarTitle, NavbarWrapper } from './NavBar.styles'

const NavBar = () => {
    return (
        <NavbarWrapper>
            <NavBarContainer>
                <NavBarLogo />
                <NavBarTitle>
                    NTRS - NASA Technical Reports Search
                </NavBarTitle>
            </NavBarContainer>
        </NavbarWrapper>
    )
}

export default NavBar