import React, { useState } from 'react';
import * as Pokedex from 'pokeapi-js-wrapper';
import CameraStream from './CameraStream';
import PokemonPhoto from './PokemonPhoto';
import PokemonInfo from './PokemonInfo';

const P = new Pokedex.Pokedex();

const PokedexContainer = () => {
  const [pokedexEntry, setPokedexEntry] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [resumeVideo, setResumeVideo] = useState(() => {});

  const handleCapture = async (pokemon) => {
    const currentPokemon = await P.getPokemonByName(pokemon.name);
    console.log(currentPokemon);

    setPokedexEntry(currentPokemon)
    setShowInfo(true);
  }

  const handleClose = () => {
    resumeVideo();
    setShowInfo(false)
  }

  return (
    <div id="pokedex-container">
      <CameraStream onCapture={handleCapture} setResumeVideo={setResumeVideo} />
      <PokemonPhoto />

      {showInfo && <PokemonInfo pokemon={pokedexEntry} onClose={handleClose}/>}
    </div>
  )
}

export default PokedexContainer;
