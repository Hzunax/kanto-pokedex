import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { init } from './prediction';
import PokedexContainer from './components/PokedexContainer';
import InitialPage from './components/InitialPage';
import { useStyles } from './hooks/useStyles';

const PAGE_STATES = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  READY: 'READY',
  ERROR: 'ERROR',
};

function App() {
  const [pageState, setPageState] = useState(PAGE_STATES.INIT); // not working as expected
  const classes = useStyles();

  const handleStartClick = async () => {
    setPageState(PAGE_STATES.LOADING);
    try {
      await init();
      setPageState(PAGE_STATES.READY);
    } catch (err) {
      setPageState(PAGE_STATES.ERROR);
    }
  }

  return (
    <div className="App">
      {(() => {
        switch (pageState) {
          case PAGE_STATES.LOADING:
            return (
              <Backdrop className={classes.backdrop} open={PAGE_STATES.LOADING}>
                <CircularProgress color="inherit" />
              </Backdrop>
            );
          case PAGE_STATES.READY:
            return <PokedexContainer />
          case PAGE_STATES.ERROR:
            return <span>ERROR!</span>
          case PAGE_STATES.INIT:
          default:
            return <InitialPage handleStartClick={handleStartClick}/>
        }
      })()}
    </div>
  );
}

export default App;
