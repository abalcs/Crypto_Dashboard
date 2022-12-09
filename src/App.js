import React, { Fragment } from 'react';

import Nav from './components/Nav/Nav.js';
import Hero from './components/Hero/Hero.js';
import Table from './components/Table/Table.js';

const App = () => {
  return (
    <Fragment>

      <Nav />
      <Hero />
      <Table />
      
    </Fragment>
  )
}

export default App;