import React from "react";
import { useSelector } from "react-redux";

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
  ResultsContainer,
  ResultsListContainer,
  ResultsPageWrapper,
} from "./ResultsPage.Styles";

function ResultsPage() {
  const { resultsData, resultsDataForCharts } = useSelector(
    (state) => state.app
  );

  const obtenerLabels = (datos) => {
    let llaves = [];
    for (let indices in datos) {
      llaves.push(Object.keys(datos[indices])[0]);
    }
    return llaves;
  };

  const obtenerValores = (datos) => {
    let valores = [];
    for (let indices in datos) {
      valores.push(Object.values(datos[indices])[0]);
    }
    return valores;
  };

  const arrPeople = resultsDataForCharts[0][1];
  const arrKeys = resultsDataForCharts[1][1];
  const arrOrganizations = resultsDataForCharts[2][1];
  const arrLocation = resultsDataForCharts[3][1];
  const arrTags = resultsDataForCharts[4][1];

  // console.log(arrPeople);
  // console.log(arrKeys);
  // console.log(arrOrganizations);
  // console.log(arrLocation);
  // console.log(arrTags);

  const labelPeople = obtenerLabels(arrPeople);
  const valuesPeople = obtenerValores(arrPeople);
  const labelKeys = obtenerLabels(arrKeys);
  const valuesKeys = obtenerValores(arrKeys);
  const labelOrgs = obtenerLabels(arrOrganizations);
  const valuesOrgs = obtenerValores(arrOrganizations);
  const labelLocations = obtenerLabels(arrLocation);
  const valuesLocations = obtenerValores(arrLocation);
  const labelTags = obtenerLabels(arrTags);
  const valuesTags = obtenerValores(arrTags);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const dataPeople = {
    labels: labelPeople,
    datasets: [
      {
        label: "Dataset 1",
        data: valuesPeople,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsPeople = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "People Chart",
      },
    },
  };

  const dataKeys = {
    labels: labelKeys,
    datasets: [
      {
        label: "Dataset 1",
        data: valuesKeys,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsKeys = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Keyprhrases Chart",
      },
    },
  };

  const dataOrgs = {
    labels: labelOrgs,
    datasets: [
      {
        label: "Dataset 1",
        data: valuesOrgs,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsOrgs = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Organizations Chart",
      },
    },
  };

  const dataLocations = {
    labels: labelLocations,
    datasets: [
      {
        label: "Dataset 1",
        data: valuesLocations,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsLocations = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Locations Chart",
      },
    },
  };

  const dataTags = {
    labels: labelTags,
    datasets: [
      {
        label: "Dataset 1",
        data: valuesTags,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const optionsTags = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "ImagesTags Chart",
      },
    },
  };

  return (
    <ResultsPageWrapper>
      <ResultsContainer>
        <ResultsListContainer>
          {resultsDataForCharts.length >= 0 && (
            <Bar options={optionsPeople} data={dataPeople} />
          )}
        </ResultsListContainer>
        <br />
        <ResultsListContainer>
          {resultsDataForCharts.length >= 0 && (
            <Bar options={optionsKeys} data={dataKeys} />
          )}
        </ResultsListContainer>
        <br />
        <ResultsListContainer>
          {resultsDataForCharts.length >= 0 && (
            <Bar options={optionsOrgs} data={dataOrgs} />
          )}
        </ResultsListContainer>
        <br />
        <ResultsListContainer>
          {resultsDataForCharts.length >= 0 && (
            <Bar options={optionsLocations} data={dataLocations} />
          )}
        </ResultsListContainer>
        <br />
        <ResultsListContainer>
          {resultsDataForCharts.length >= 0 && (
            <Bar options={optionsTags} data={dataTags} />
          )}
        </ResultsListContainer>
        {/* <ResultsListContainer>Holaaa</ResultsListContainer> */}
      </ResultsContainer>
    </ResultsPageWrapper>
  );
}

export default ResultsPage;
