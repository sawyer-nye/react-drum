import React from 'react';
import DrumMachine from './components/DrumMachine'
import './styles.css'

const App = () => {
  
  return (
    <div id='container' className='centered'>
      <h1>Drum Machine</h1>
      <DrumMachine />
    </div>
  );
}

export default App;
