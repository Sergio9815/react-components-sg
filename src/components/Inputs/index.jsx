import React, { useState } from 'react';

const PfInput = ({
  handleClick,
  value,
  placeholder = "type a comment",
  id = "",
  name = "",
  disabled = false,
}) => {
  const [actualValue, setActualValue] = useState(value || '');

  const handleSend = () => {
    if (actualValue.trim() !== '') {
      handleClick(actualValue);
      setActualValue(''); // Restablece el valor del campo después de hacer clic en Enviar
    }
  };

  const handleInputChange = (e) => {
    setActualValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && actualValue.trim() !== '') {
      handleSend();
    }
  };

  return (
    <div style={{ display: "flex", gap: '5px' }}>
      <input
        type="text"
        style={{
          borderRadius: "8px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          border: 'none'
        }}
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={handleSend}
        style={{
          width: "101px",
          height: "32px",
          padding: "6px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          /* margin: auto, */
          gap: "2px",
          background: "#61DAFB",
          fontFamily: "Open Sans",
          fontSize: "14px",
          /* font-weight: 700, */
          lineHeight: "21px",
          letterSpacing: "0em",
          textAlign: "center",
          border: "none",
          color: "#3D444F",
          fontWeight: "500",
          textTransform: "uppercase",
          cursor: "pointer",
          outline: "none",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default PfInput;
