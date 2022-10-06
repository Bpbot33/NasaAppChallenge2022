import React from "react";
import {
  ItemContent,
  ItemContentText,
  TableHeader,
  TableItem,
  TableList,
  TableWrapper,
} from "./Table.styles";

const Table = ({ data }) => {
  const dataArr = Object.entries(data[0]);
  console.log(dataArr);
  return (
    <TableWrapper>
      <TableHeader>Table</TableHeader>
      {data.length >= 1 && (
        <TableList>
          {data.map((el, key) => (
            <TableItem>
              [{key + 1}] -->
              <ItemContent>
                Score: <ItemContentText>{Object.values(el)[0]}</ItemContentText>
              </ItemContent>
              <ItemContent>
                People:{" "}
                {Object.values(el)[2].map((p) => (
                  <ItemContentText>{p},</ItemContentText>
                ))}
              </ItemContent>
              <ItemContent>
                Organizations:{" "}
                {Object.values(el)[3].map((p) => (
                  <ItemContentText>{p},</ItemContentText>
                ))}
              </ItemContent>
              <ItemContent>
                Locations:{" "}
                {Object.values(el)[4].map((p) => (
                  <ItemContentText>{p},</ItemContentText>
                ))}
              </ItemContent>
            </TableItem>
          ))}
        </TableList>
      )}
    </TableWrapper>
  );
};

export default Table;
