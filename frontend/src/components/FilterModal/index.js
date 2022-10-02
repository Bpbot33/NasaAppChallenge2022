import React, { useState } from "react";
import {
  CloseButton,
  Filter,
  FilterCheckBox,
  FilterInput,
  FilterModalButton,
  FilterModalContainer,
  FilterModalWrapper,
  FiltersContainer,
  FilterTitle,
} from "./FilterModal.styles";

export const FilterModal = ({ closeModal }) => {
  const [showPeople, setShowPeople] = useState(false);
  const [peopleValue, setPeopleValue] = useState(null);

  const [showOrganizations, setShowOrganizations] = useState(false);
  const [organizationsValue, setOrganizationsValue] = useState(null);

  const [showLocations, setShowLocations] = useState(false);
  const [locationsValue, setLocationsValue] = useState(null);

  const [showKeyPhrases, setShowKeyPhrases] = useState(false);
  const [keyphrasesValue, setKeyphrasesValue] = useState(null);

  const [showImageTags, setShowImageTags] = useState(false);
  const [imageTagsValue, setImageTagsValue] = useState(null);

  const [showText, setShowText] = useState(false);
  const [textValue, setTextValue] = useState(null);

  const addFilters = () => {
    const filterObj = {
      peopleValue,
      organizationsValue,
      locationsValue,
      keyphrasesValue,
      imageTagsValue,
      textValue,
    };

    console.log(filterObj);
  };

  return (
    <FilterModalWrapper>
      <FilterModalContainer>
        <CloseButton onClick={closeModal} />
        <FiltersContainer>
          <Filter>
            <FilterCheckBox onClick={() => setShowPeople(!showPeople)} />
            {!showPeople ? (
              <FilterTitle>People</FilterTitle>
            ) : (
              <FilterInput
                placeholder="People"
                onChange={(e) => setPeopleValue(e.target.value)}
                value={peopleValue}
              />
            )}
          </Filter>
          <Filter>
            <FilterCheckBox
              onClick={() => setShowOrganizations(!showOrganizations)}
            />
            {!showOrganizations ? (
              <FilterTitle> Organizations </FilterTitle>
            ) : (
              <FilterInput
                placeholder="Organizations"
                onChange={(e) => setOrganizationsValue(e.target.value)}
                value={organizationsValue}
              />
            )}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowLocations(!showLocations)} />
            {!showLocations ? (
              <FilterTitle>Locations</FilterTitle>
            ) : (
              <FilterInput
                placeholder="Location"
                onChange={(e) => setLocationsValue(e.target.value)}
                value={locationsValue}
              />
            )}
          </Filter>
          <Filter>
            <FilterCheckBox
              onClick={() => setShowKeyPhrases(!showKeyPhrases)}
            />
            {!showKeyPhrases ? (
              <FilterTitle>Keyphrases</FilterTitle>
            ) : (
              <FilterInput
                placeholder="Keyphrases"
                onChange={(e) => setKeyphrasesValue(e.target.value)}
                value={keyphrasesValue}
              />
            )}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowImageTags(!showImageTags)} />
            {!showImageTags ? (
              <FilterTitle>Image Tags</FilterTitle>
            ) : (
              <FilterInput
                placeholder="Image Tags"
                onChange={(e) => setImageTagsValue(e.target.value)}
                value={imageTagsValue}
              />
            )}
          </Filter>
          <Filter>
            <FilterCheckBox onClick={() => setShowText(!showText)} />
            {!showText ? (
              <FilterTitle>Text</FilterTitle>
            ) : (
              <FilterInput
                placeholder="Text"
                onChange={(e) => setTextValue(e.target.value)}
                value={textValue}
              />
            )}
          </Filter>
        </FiltersContainer>
        <FilterModalButton onClick={addFilters}>Add Filters</FilterModalButton>
      </FilterModalContainer>
    </FilterModalWrapper>
  );
};
