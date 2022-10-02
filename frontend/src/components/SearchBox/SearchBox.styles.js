import styled from "styled-components";
import searchIcon from "../../assets/search-icon.png";
import searchIconFilter from "../../assets/filter-icon.png";

export const SearchBoxWrapper = styled.div`
  padding: 16px 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const SearchBoxInputContainer = styled.div`
  position: relative;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const SearchBoxInput = styled.input`
  box-sizing: border-box;
  padding-left: 45px;
  height: 45px;
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #2e2c2c;
  font-size: 20px;
  font-weight: 700;
  line-height: 110%;

  &::placeholder {
    color: #d9d9d9;
    font-size: 20px;
    font-weight: 700;
    line-height: 110%;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 11px;
  left: 11px;
  width: 20px;
  height: 20px;
  background: url(${searchIcon}) center no-repeat;
  background-size: 100%;
`;

export const SearchFilterIcon = styled.div`
  position: absolute;
  top: 11px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: url(${searchIconFilter}) center no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #0b3d91;
  border-radius: 5px;
  border: none;
`;
