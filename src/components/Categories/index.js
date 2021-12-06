import { Component } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

class Categories extends Component {
  render() {
    return (
      <main>
        <h1>Categories Page</h1>
        <NavBar />
        <Outlet />
      </main>
    );
  }
}

export default Categories;
