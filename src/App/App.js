import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import IntroPage from '../IntroPage/IntroPage'
// import footer from '../Footer/Footer';
import Impact from '../Impact/Impact';
import OurStory from '../OurStory/OurStory';

function App() {
  return (
    <div className='App'>
        <Route path='/' component={Header} />
        <Route path='/' component={IntroPage} />
        <Route path='/' component={Impact} />
        <Route path='/' component={OurStory} />
        {/* <Route path='/' component={footer} /> */}
    </div>
  );
}

export default App;
