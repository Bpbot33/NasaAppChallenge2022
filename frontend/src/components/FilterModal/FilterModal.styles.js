import styled from "styled-components";
import closeButtonIcon from "../../assets/close-icon.png";

export const FilterModalWrapper = styled.div`
  position: fixed;
  top: 80px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(46, 44, 44, 0.8);
`;

export const FilterModalContainer = styled.div`
  position: relative;
  top: -30px;
  padding: 18px 22px;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background: rgba(217, 217, 217, 0.8);
`;

export const CloseButton = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 10px;
  right: 10px;
  background: url(${closeButtonIcon}) center no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

export const FilterModalButton = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #0b3d91;
  border-radius: 5px;
  border: none;
`;

export const FiltersContainer = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Filter = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 10px;
`;

export const FilterCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
`;

export const FilterTitle = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 110%;
  color: black;
`;

export const FilterInput = styled.input.attrs({ type: "text" })`
  height: 20ox;
  width: 220px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #0b3d91;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(46, 44, 44, 0.8);
    font-weight: 600;
    font-size: 18px;
  }
`;
