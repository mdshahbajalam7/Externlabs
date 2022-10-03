import { useState } from 'react';
import './App.css';
import Dropdrag from './components/Dropdrag';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
     <Slider/>
     <Dropdrag/>
    </div>
  );
}

export default App;
