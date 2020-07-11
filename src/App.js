import React from 'react';
import Decode from './components/Decode';
import Encode from './components/Encode';

function App() {
  return (
    <div>
      <h1>Caesar Cipher ROT-13</h1>
      <Decode />
      <Encode />
    </div>
    
  );
}

export default App;
