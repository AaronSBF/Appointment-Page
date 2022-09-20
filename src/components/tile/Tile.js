import React from "react";

export const Tile = ({ value }) => {
  const arr = Object.values(value);
  return (
    <div className="tile-container">
      {arr.map((value, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {val}
            </p>
          );
        } else {
          <p className="tile" key={index}>
            {val}
          </p>;
        }
      })}
    </div>
  );
};
