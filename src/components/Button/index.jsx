import React from 'react';

const Button = ({ handleClick, label = 'Agregar', showIcon = true }) => (
    <button
      type='button'
      onClick={handleClick}
      style={{
        width: '101px',
        height: '32px',
        padding: '6px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* margin: auto, */
        gap: '2px',
        background: '#61DAFB',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        /* font-weight: 700, */
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'center',
        border: 'none',
        color: '#3D444F',
        fontWeight: '500',
        textTransform: 'uppercase',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {
        showIcon && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
              fill="#3D444F"
            />
          </svg>
        )
      }
      { label }
    </button>
)

export default Button;