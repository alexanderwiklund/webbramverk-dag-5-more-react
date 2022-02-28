import React from "react";

export const DarkMode = ({ children }) => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>{children}</div>
  );
};
