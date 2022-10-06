import React from "react";
import {
  Loader,
  LoaderContainer,
  LoadingModalWrapper,
} from "./LoadingModal.styles";

const LoadingModal = () => {
  return (
    <LoadingModalWrapper>
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </LoadingModalWrapper>
  );
};

export default LoadingModal;
