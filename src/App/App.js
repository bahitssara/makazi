import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import IntroPage from '../IntroPage/IntroPage'
import footer from '../Footer/Footer';
import Impact from '../Impact/Impact';
import OurStory from '../OurStory/OurStory';
import Inspiration from '../Inspiration/Inspiration';
import ImpactFullPg from '../ImpactFullPg/ImpactFullPg';
import OurStoryFullPg from '../OurStoryFullPg/OurStoryFullPg';
import inspirationFullPg from '../InspirationFullPg/InspirationFullPg';

function App() {
  return (
    <div className='app'>
        <Route path='/' component={Header} />
        <Route path='/' exact component={IntroPage} />
        <Route path='/' exact component={Impact} />
        <Route path='/' exact component={OurStory} />
        <Route path='/' exact component={Inspiration} />
        <Route path='/impact' component={ImpactFullPg} exact/>
        <Route path='/ourstory' component={OurStoryFullPg} exact />
        <Route path='/inspiration' component={inspirationFullPg} exact />
        <Route path='/' component={footer} />
    </div>
  );
}

export default App;
