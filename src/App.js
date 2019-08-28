import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header/Header'
import footer from './Footer/Footer';

function App() {
  return (
    <div className='App'>
        <Route path='/' component={Header} />
        <Route path='/' component={footer} />

    </div>
  );
}

export default App;
