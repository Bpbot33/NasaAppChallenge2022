import styled from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const HomePageContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
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
