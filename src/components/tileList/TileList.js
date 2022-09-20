import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((value, index) => (
        <Tile value={value} key={index} />
      ))}
    </div>
  );
};
