import React from 'react';
import '../../style/DisplayItem.css';
import { leaders } from '../../assets/misc';

function DisplayItem({ currentItem }) {
  return (
    <div className='card'>
      <h1>{leaders[currentItem].name}</h1>
    </div>
  );
}

export default DisplayItem;