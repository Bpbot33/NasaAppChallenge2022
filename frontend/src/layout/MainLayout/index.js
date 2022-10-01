import React from 'react'
import NavBar from '../../components/Commons/NavBar'
import { MainLayoutWrapper } from './MainLayout.styles'

function MainLayout({ children }) {
    return (
        <MainLayoutWrapper>
            <NavBar />
            {children}
        </MainLayoutWrapper>
    )
}

export default MainLayout