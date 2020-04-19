import React from 'react';

const PokedexContainer = ({pokemon, onClose}) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <span id="label-container">{pokemon.name}</span>
      <button onClick={onClose}>X</button>
    </div>
  )
}

export default PokedexContainer;
