import React, {useState} from 'react';

function Spell({ spell, onCast }) {
    return (
      <div className='App'>
        <h2>{spell.name}</h2>
        <p>{spell.description}</p>
        <button onClick={(e) => {
          e.stopPropagation(); 
          onCast(spell);
        }}><span>Cast Spell</span></button>
      </div>
    );
  }

export default Spell;