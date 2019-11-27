import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import InfoScroll from './InfoScroll';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <InfoScroll/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
