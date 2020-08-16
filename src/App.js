import React from 'react';
import Openmenu from './Redux/Redux'

import './App.css';
import Header from './components/header/header';

function App(Openmenu) {
  return (
    <div className="App">
     <Header Openmenu={Openmenu}/>
    </div>
  );
}

export default App;
