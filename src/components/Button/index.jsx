import React from 'react';
import './index.scss'

const Button = ({ 
  handleClick, 
  variant = 'primary',
  size = 'sm',
  radius = '',
  customClass = '',
  disabled = false,
  fullWith = false,
  leftIcon = false,
  rightIcon = false,
  children
}) => (
    <button
      type='button'
      className={`pf-button ${variant} ${size} ${radius} ${customClass} ${fullWith ? 'full-with' : ''}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {leftIcon && (
        <>
          { leftIcon }
        </>
      )}

      { children }

      {rightIcon && (
        <>
          { rightIcon }
        </>
      )}
    </button>
)

export default Button;