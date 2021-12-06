import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Game from './views/Game';
import Categories from './components/Categories/index';
import Table from './components/Categories/Table';

export const router = (
  <Routes>
    <Route exact path='/' element={ <Home /> } />
    <Route path='/play' element={ <Game /> } />
    <Route path='/categories' element={ <Categories /> }>
      <Route path=':page' element={ <Table /> } />
    </Route>
  </Routes>
);
