import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ImpactFullPg from './ImpactFullPg';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ImpactFullPg/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});