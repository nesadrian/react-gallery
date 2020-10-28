import React from "react";

export const Button = ({ buttonName, url, handleButtonClick, disabled }) => {
  return disabled ? (
    <button disabled onClick={() => handleButtonClick(url)}>
      {buttonName}
    </button>
  ) : (
    <button onClick={() => handleButtonClick(url)}>{buttonName}</button>
  );
};
