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
    const selectForBackend =
      "metadata_storage_name,people,keyphrases,organizations,locations,imageTags";

    const backendCall = await axiosCall({
      search: !filters ? `'${value}'` : filters,
      skip: 0,
      queryType: "full",
      searchMode: "all",
      select: selectForBackend,
      top: 10,
    });

    // console.log(backendCall.data.data.value);
    // backendCall.data.data.value.forEach((el) => {
    //   // if (typeof el === )
    //   console.log(typeof el);
    // });

    // Object.entries(backendCall.data.data.value).forEach((el) => {
    //   // console.log("element", el[1]);
    //   Object.entries(el[1]).forEach((el) => {
    //     if (typeof el[1] === "object") {
    //       console.log(el[1]);
    //       console.log(el[1].length);
    //       let newArr = [];
    //       // el[1].forEach((innerArr) => {
    //       //   newArr.concat(innerArr);
    //       // });
    //       // el[1] = newArr;
    //       // for (let innerArr in el[1]) {
    //       //   console.log("inner", innerArr);
    //       // }
    //       // console.log(newArr);
    //     }
    //   });
    // });
    // Array.prototype.push.apply(arr1, arr2);
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
      allDataForCharts.push([el, datosAGraficar]);
    });

    dispatch(onSetResultsData(backendCall.data.data.value));
    dispatch(onSetResultsDataForCharts(allDataForCharts));
    window.location.href = "/results";
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
