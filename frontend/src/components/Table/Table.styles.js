import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 60%;
`;

export const TableList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TableHeader = styled.p`
  margin-bottom: 30px;
  width: 100%;
  height: fit-content;
  font-size: 24px;
  padding: 0;
  text-align: center;
  border-bottom: 2px solid white;
  font-weight: 800;
`;

export const TableItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  padding-left: 10px;
  height: fit-content;
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  list-style: none;
`;

export const ItemContent = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 1rem;
`;

export const ItemContentText = styled.p`
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
`;
