import React, { useState } from 'react';
import './App.css';
import { init } from './prediction';
import PokedexContainer from './components/PokedexContainer';

const PAGE_STATES = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  READY: 'READY',
  ERROR: 'ERROR',
};

function App() {
  const [pageState, setPageState] = useState(PAGE_STATES.INIT); // not working as expected

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
      <header className="App-header">
        {(() => {
          switch (pageState) {
            case PAGE_STATES.LOADING:
              return <span>Loading ...</span>;
            case PAGE_STATES.READY:
              return <PokedexContainer />
            case PAGE_STATES.ERROR:
              return <span>ERROR!</span>
            case PAGE_STATES.INIT:
            default:
              return <button type="button" onClick={handleStartClick}>Start</button>;
          }
        })()}
      </header>
    </div>
  );
}

export default App;
