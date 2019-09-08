import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Inspiration from './Inspiration';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Inspiration/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
