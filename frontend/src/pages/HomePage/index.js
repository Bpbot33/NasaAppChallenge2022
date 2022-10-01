import React from 'react'
import { SearchBox } from '../../components/SearchBox'
import { HomePageContainer, HomePageWrapper } from './HomePage.styles'

function HomePage() {
    return (
        <HomePageWrapper>
            <HomePageContainer>
                <SearchBox />
            </HomePageContainer>
        </HomePageWrapper>
    )
}

export default HomePage