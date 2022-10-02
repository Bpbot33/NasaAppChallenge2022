import React, { useState } from "react";
import { FilterModal } from "../FilterModal";
import {
  SearchBoxInput,
  SearchBoxInputContainer,
  SearchBoxWrapper,
  SearchButton,
  SearchFilterIcon,
  SearchIcon,
} from "./SearchBox.styles";

export const SearchBox = () => {
  const [value, setValue] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmmit = () => {
    console.log("Submmit");
  };

  const closeModalHandle = () => {
    return setShow(false);
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
        <SearchFilterIcon onClick={() => setShow(true)} />
      </SearchBoxInputContainer>
      {show && <FilterModal closeModal={closeModalHandle} />}
    </SearchBoxWrapper>
  );
};
