import styled from "styled-components";

export const ResultsPageWrapper = styled.div``;

export const ResultsContainer = styled.div`
  box-sizing: border-box;
  margin: 80px auto;
  padding-bottom: 80px;
  width: 100%;
  max-width: 800px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: 800px) {
    padding: 0 16px;
    margin-bottom: 64px;
  }
`;

export const ResultsListContainer = styled.div`
  padding: 16px 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 700;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const ResultHeader = styled.p`
  width: 60%;
  height: fit-content;
  font-size: 24px;
  padding: 0;
  text-align: center;
  border-bottom: 2px solid white;
  font-weight: 800;
`;
