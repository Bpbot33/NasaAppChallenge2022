import React, { useState } from "react";
import { FilterModal } from "../FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { openCloseFiltersModal } from "../../state/app/appActions";

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
  const dispatch = useDispatch();
  const { menuOpenFilters } = useSelector((state) => state.app);

  const handleSubmmit = () => {
    console.log("Submmit");
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
