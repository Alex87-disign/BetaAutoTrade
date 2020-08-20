import React from 'react';
import Openmenu from './Redux/Redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header/header';
import CallBackButton from './components/CallBackButton/CallBackButton';
import OrderButton from './components/OrderButton/OrderButton';

function App(Openmenu) {
  return (
    <BrowserRouter>
      <div className="App">
        <OrderButton />
        <CallBackButton />
        <Header Openmenu={Openmenu} />
      </div>
      <div>Main здесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуздесь инфа про конторуммздесь инфа про конторуздесь инфа про конторуздесь инфа про контору</div>
    </BrowserRouter>
  );
}

export default App;
