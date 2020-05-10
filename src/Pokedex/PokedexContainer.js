import React, { useState } from 'react';
import * as Pokedex from 'pokeapi-js-wrapper';
import CameraStream from '../Camera/CameraStream';
import PokedexEntry from './PokedexEntry';

const P = new Pokedex.Pokedex();

const PokedexContainer = () => {
  const [pokedexEntry, setPokedexEntry] = useState({});
  const [open, setOpen] = React.useState(false);
  const [resumeVideo, setResumeVideo] = useState(() => {});

  const handleCapture = async (pokemon) => {
    const currentPokemon = await P.getPokemonByName(pokemon.name);
    console.log(currentPokemon);

    setPokedexEntry(currentPokemon)
    setOpen(true);
  }

  const handleClose = () => {
    resumeVideo();
    setOpen(false)
  }

  return (
    <div id="pokedex-container">
      <CameraStream onCapture={handleCapture} setResumeVideo={setResumeVideo} />

      <PokedexEntry pokemon={pokedexEntry} open={open} handleClose={handleClose} />
    </div>
  )
}

export default PokedexContainer;
