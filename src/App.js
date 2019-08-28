import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header/Header'

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Header} />
    </div>
  );
}

export default App;
