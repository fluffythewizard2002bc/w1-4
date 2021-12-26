import React from 'react';
import Button from '../Button/Button';
import '../../style/GameBoard.css';

function GameBoard({ like, dislike, nextItem, isEnd }) {
  const handleClick = (type) => {
    if (isEnd) return;
    type === 'no' ? dislike() : like();
    nextItem();
  };
  return (
    <div className='board-buttom'>
      <Button style={{ backgroundColor: 'red' }} type='no' handleClick={handleClick} />
      <Button style={{ backgroundColor: 'green' }} type='yes' handleClick={handleClick} />
    </div>
  );
}

export default GameBoard;