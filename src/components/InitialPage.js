import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../hooks/useStyles';

const InitialPage = ({handleStartClick}) => {
  const classes = useStyles();

  return (
    <div id="initial-page">
      <h1>Welcome to the React Pokedex!</h1>
      <p id="welcome-paragraph">
        This application makes use of your device's camera to identify a Pokémon and then displays
        all the info you've ever wanted to know about it!
      </p>
      <Button className={classes.colorful} type="button" onClick={handleStartClick}>Start</Button>
    </div>
  );
}

export default InitialPage;