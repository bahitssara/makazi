import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import OurStoryFullPg from './OurStoryFullPg';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <OurStoryFullPg/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});