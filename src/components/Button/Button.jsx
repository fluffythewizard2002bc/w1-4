import React from 'react';
import '../../style/Button.css';

function Button({ style, handleClick, type }) {
  return (
    <button
      onClick={() => handleClick(type)}
      className='icon'
      style={style}
    />
  );
}

export default Button;