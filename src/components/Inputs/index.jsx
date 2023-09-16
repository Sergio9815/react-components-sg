import React from 'react';

const PfInput = ({ 
  handleClick, 
  value, 
  placeholder = 'type a comment',
  id = '',
  name = '',
  disabled = false
 }) => (
  <input
    type="text"
    style={{
      borderRadius: '8px', 
      height: '50px',
      display: 'flex',
      alignItems: 'center',
    }}
    id={id}
    name={name}
    disabled={disabled}
    value={value}
    onBlur={handleClick}
    placeholder={placeholder}
  />
)

export default PfInput;