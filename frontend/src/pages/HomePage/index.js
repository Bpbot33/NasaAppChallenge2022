import React from "react";
import Graphs from "../../components/Graphs";
import { SearchBox } from "../../components/SearchBox";
import { HomePageContainer, HomePageWrapper } from "./HomePage.styles";

function HomePage() {
  return (
    <HomePageWrapper>
      <HomePageContainer>
        <SearchBox />
        <Graphs />
      </HomePageContainer>
    </HomePageWrapper>
  );
}

export default HomePage;
