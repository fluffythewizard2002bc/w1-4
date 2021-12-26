import React from 'react';
import '../../style/Player.css';


function Player({ likes, dislikes }) {
  return (
    <div className='player'>
      <div className='player_counter-container'>
        <h1 style={{ color: 'red' }}>{dislikes}</h1>
      </div>
      <div className='player_counter-container'>
        <h1 style={{ color: 'green' }}>{likes}</h1>
      </div>
    </div>
  );
}

export default Player;