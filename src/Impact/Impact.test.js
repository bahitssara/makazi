import React from 'react';
import ReactDOM from 'react-dom';
import Impact from './Impact';
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <Impact /> 
  </BrowserRouter>
, div);
  ReactDOM.unmountComponentAtNode(div);
});
