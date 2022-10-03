import React, { useState } from "react";
import { FilterModal } from "../FilterModal";
import { useDispatch, useSelector } from "react-redux";
import {
  onSetResultsData,
  onSetResultsDataForCharts,
  openCloseFiltersModal,
} from "../../state/app/appActions";

import {
  SearchBoxInput,
  SearchBoxInputContainer,
  SearchBoxWrapper,
  SearchButton,
  SearchFilterIcon,
  SearchIcon,
} from "./SearchBox.styles";
import axiosCall from "../../utils/axiosCall";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { menuOpenFilters, filters } = useSelector((state) => state.app);

  const handleSubmmit = async () => {
    console.log("Submmit");

    const selectForBackend =
      "metadata_storage_name,people,keyphrases,organizations,locations,imageTags";

    const backendCall = await axiosCall({
      search: filters === "'people':'*'" ? `'search':'${value}'` : filters,
      skip: 0,
      queryType: "full",
      searchMode: "all",
      select: selectForBackend,
      top: 10,
    });

    // console.log(backendCall.data.data);
    function obtengoListadoAtributo(datos, atributo) {
      var resultado = [];
      for (let llave in datos) {
        resultado = resultado.concat(datos[llave][atributo]);
      }
      return resultado;
    }

    function cuentoValores(diccionario) {
      const counts = {};
      diccionario.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      return counts;
    }

    //ordeno de mayor a menor
    function ordenarDict(obj) {
      let items = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
      });
      items.sort(function (first, second) {
        return second[1] - first[1];
      });
      let sorted_obj = {};
      items.forEach(function (v) {
        let use_key = v[0];
        let use_value = v[1];
        sorted_obj[use_key] = use_value;
      });
      return sorted_obj;
    }

    function mostrarPrimeros(obj, max) {
      const cutObject = (obj, max) =>
        Object.keys(obj)
          .filter((key, index) => index < max)
          .map((key) => ({ [key]: obj[key] }));
      return cutObject(obj, max);
    }

    function preparacionData(data, atributo, cantidad) {
      let arrayAtributo = obtengoListadoAtributo(data, atributo);
      let valoresContados = cuentoValores(arrayAtributo);
      let valoresOrdenados = ordenarDict(valoresContados);
      let obtengoPrimeros = mostrarPrimeros(valoresOrdenados, cantidad);
      return obtengoPrimeros;
    }
    let datosAnalizar = [
      "people",
      "keyphrases",
      "organizations",
      "locations",
      "imageTags",
    ];

    const allDataForCharts = [];

    datosAnalizar.forEach((el) => {
      let datosAGraficar = preparacionData(backendCall.data.data.value, el, 10);
      console.log(el);
      allDataForCharts.push([el, datosAGraficar]);
    });

    // function obtenerLabels(datos) {
    //   let llaves = [];
    //   for (let indices in datos) {
    //     llaves.push(Object.keys(datos[indices])[0]);
    //   }
    //   return llaves;
    // }

    // function obtenerValores(datos) {
    //   let valores = [];
    //   for (let indices in datos) {
    //     valores.push(Object.values(datos[indices])[0]);
    //   }
    //   return valores;
    // }

    // setChartLabels(obtenerLabels(allDataForCharts[0][1]));
    // setChartData(obtenerValores(allDataForCharts[0][1]));

    dispatch(onSetResultsData(backendCall.data.data.value));
    dispatch(onSetResultsDataForCharts(allDataForCharts));
  };

  return (
    <SearchBoxWrapper>
      <SearchBoxInputContainer>
        <SearchBoxInput
          placeholder="Text here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <SearchButton onClick={handleSubmmit}>Search</SearchButton>
        <SearchIcon />
        <SearchFilterIcon
          onClick={() => dispatch(openCloseFiltersModal(true))}
        />
      </SearchBoxInputContainer>
      {menuOpenFilters && <FilterModal />}
    </SearchBoxWrapper>
  );
};
