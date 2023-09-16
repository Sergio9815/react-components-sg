import React, { useState } from "react";

const SgFields = ({
  handleClick,
  value,
  placeholder = "type a comment",
  id = "",
  name = "",
  disabled = false,
}) => (
  <input
    type="text"
    style={{
      borderRadius: "8px",
      height: "32px",
      display: "flex",
      alignItems: "center",
      border: "none",
    }}
    id={id}
    name={name}
    disabled={disabled}
    value={value}
    onKeyPress={(e) => {
      if (e.key === "Enter") {
        // El usuario presionó la tecla "Enter"
        handleClick(e.target.value);
      }
    }}
    placeholder={placeholder}
  />
);

export default SgFields;
