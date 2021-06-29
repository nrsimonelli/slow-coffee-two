import React from 'react';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Setup from '../Setup/Setup';

const App = () => {
  return (
    <div className='root min-h-screen flex justify-start items-center'>
      <Nav />
      <Landing />
    </div>
  ); // end return
};

export default App;
