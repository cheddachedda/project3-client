import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Game from './views/Game';

export const router = (
  <Routes>
    <Route exact path='/' element={ <Home /> } />
    <Route path='/play' element={ <Game /> } />
  </Routes>
);
