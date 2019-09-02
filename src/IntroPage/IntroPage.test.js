
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import IntroPage from './IntroPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <IntroPage/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});