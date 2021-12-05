import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { router } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { router }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
