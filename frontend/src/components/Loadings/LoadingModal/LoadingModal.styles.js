import styled from "styled-components";
import loaderIcon from "../../../assets/loader-icon.png";
export const LoadingModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  padding: 30px;
  width: 100px;
  height: fit-content;
  background-color: #0b3d91;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  font-weight: 700;
  font-size: 18px;
  border: none;
  background: url(${loaderIcon}) no-repeat center;
  background-size: contain;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
