import React from 'react';
import Openmenu from './Redux/Redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header/header';

function App(Openmenu) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header Openmenu={Openmenu} />
      </div>
      <div>Main здесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуммздесь инфа про конторуздесь инфа про конторуздесь инфа про контору</div>
    </BrowserRouter>
  );
}

export default App;
