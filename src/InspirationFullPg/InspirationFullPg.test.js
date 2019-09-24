import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import InspirationFullPg from './InspirationFullPg';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <InspirationFullPg/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
