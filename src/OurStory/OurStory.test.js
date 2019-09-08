import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import OurStory from './OurStory';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <OurStory/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
