import React, { useState } from "react";
import axiosCall from "../../utils/axiosCall";
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

  const addFilters = async () => {
    const filterObj = {
      people: peopleValue,
      organizations: organizationsValue,
      locations: locationsValue,
      keyphrases: keyphrasesValue,
      tags: imageTagsValue,
      text: textValue,
    };

    const selectForBackend =
      "metadata_storage_name,people,keyphrases,organizations,locations,imageTags";

    const searchForBacked = `${
      filterObj.people !== "" ? "people:" + filterObj.people : "*"
    }${
      filterObj.organizations && " AND organizations:" + filterObj.organizations
    }${filterObj.locations && " AND location" + filterObj.locations}${
      filterObj.keyphrases && " AND keyphrases" + filterObj.keyphrases
    }${filterObj.tags && " AND imageTags" + filterObj.tags}${
      filterObj.text && " AND text" + filterObj.text
    }`;

    const backendCall = await axiosCall({
      search: searchForBacked,
      skip: 0,
      queryType: "full",
      searchMode: "all",
      select: selectForBackend,
      top: 10,
    });

    console.log(backendCall.data.data);
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
