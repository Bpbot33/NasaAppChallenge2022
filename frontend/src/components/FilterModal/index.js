import React, { useState } from "react";
import {
  CloseButton,
  Filter,
  FilterCheckBox,
  FilterModalButton,
  FilterModalContainer,
  FilterModalWrapper,
  FiltersContainer,
  FilterTitle,
} from "./FilterModal.styles";

export const FilterModal = ({ closeModal }) => {
  const [showPeople, setShowPeople] = useState(false);
  const [peopleValue, setPeopleValue] = useState("");

  const [showOrganizations, setShowOrganizations] = useState(false);
  const [organizationsValue, setOrganizationsValue] = useState("");

  const [showLocations, setShowLocations] = useState(false);
  const [locationsValue, setLocationsValue] = useState("");

  const [showKeyPhrases, setShowKeyPhrases] = useState(false);
  const [keyphrasesValue, setKeyphrasesValue] = useState("");

  const [showImageTags, setShowImageTags] = useState(false);
  const [imageTagsValue, setImageTagsValue] = useState("");

  const [showText, setShowText] = useState(false);
  const [textValue, setTextValue] = useState("");

  return (
    <FilterModalWrapper>
      <FilterModalContainer>
        <CloseButton onClick={closeModal} />
        <FiltersContainer>
          <Filter>
            <FilterCheckBox onClick={() => setShowPeople(!showPeople)} />
            {!showPeople ? <FilterTitle>People</FilterTitle> : <></>}
          </Filter>
          <Filter>
            <FilterCheckBox
              onClick={() => setShowOrganizations(!showOrganizations)}
            />
            {!showOrganizations ? (
              <FilterTitle> Organizations </FilterTitle>
            ) : (
              <></>
            )}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowLocations(!showLocations)} />
            {!showLocations ? <FilterTitle>Locations</FilterTitle> : <></>}
          </Filter>
          <Filter>
            <FilterCheckBox
              onClick={() => setShowKeyPhrases(!showKeyPhrases)}
            />
            {!showKeyPhrases ? <FilterTitle>Keyphrases</FilterTitle> : <></>}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowImageTags(!showImageTags)} />
            {!showImageTags ? <FilterTitle>image Tags</FilterTitle> : <></>}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowText(!showText)} />
            {!showText ? <FilterTitle>Text</FilterTitle> : <></>}
          </Filter>
        </FiltersContainer>
        <FilterModalButton>Add Filters</FilterModalButton>
      </FilterModalContainer>
    </FilterModalWrapper>
  );
};
