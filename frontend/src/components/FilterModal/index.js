import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  onSetFilters,
  openCloseFiltersModal,
} from "../../state/app/appActions";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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

export const FilterModal = () => {
  const dispatch = useDispatch();

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

    const searchForBacked = `${
      filterObj.people !== "" ? "people:" + filterObj.people : "*"
    }${
      filterObj.organizations && " AND organizations:" + filterObj.organizations
    }${filterObj.locations && " AND location" + filterObj.locations}${
      filterObj.keyphrases && " AND keyphrases" + filterObj.keyphrases
    }${filterObj.tags && " AND imageTags" + filterObj.tags}${
      filterObj.text && " AND text" + filterObj.text
    }`;
    dispatch(onSetFilters(searchForBacked));
  };

  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   BarElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );

  // const data = {
  //   labels: chartLabels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: chartData,
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Bar Chart",
  //     },
  //   },
  // };

  return (
    <FilterModalWrapper>
      <FilterModalContainer>
        <CloseButton onClick={() => dispatch(openCloseFiltersModal(false))} />
        <FiltersContainer>
          <Filter>
            <FilterCheckBox
              onClick={() => {
                if (!showPeople) {
                  setShowPeople(true);
                } else {
                  setShowPeople(false);
                  setPeopleValue("");
                }
              }}
            />
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
              onClick={() => {
                if (!showPeople) {
                  setShowOrganizations(true);
                } else {
                  setShowOrganizations(false);
                  setOrganizationsValue("");
                }
              }}
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
            <FilterCheckBox
              onClick={() => {
                if (!showPeople) {
                  setShowLocations(true);
                } else {
                  setShowLocations(false);
                  setLocationsValue("");
                }
              }}
            />
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
              onClick={() => {
                if (!showPeople) {
                  setShowKeyPhrases(true);
                } else {
                  setShowKeyPhrases(false);
                  setKeyphrasesValue("");
                }
              }}
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
            <FilterCheckBox
              onClick={() => {
                if (!showPeople) {
                  setShowImageTags(true);
                } else {
                  setShowImageTags(false);
                  setImageTagsValue("");
                }
              }}
            />
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
            <FilterCheckBox
              onClick={() => {
                if (!showPeople) {
                  setShowText(true);
                } else {
                  setShowText(false);
                  setTextValue("");
                }
              }}
            />
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
        {/* {showChart && <Bar options={options} data={data} />} */}
      </FilterModalContainer>
    </FilterModalWrapper>
  );
};
