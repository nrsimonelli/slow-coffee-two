import React from 'react';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';

const App = () => {
  return (
    <div className='root wave-layer min-h-screen flex justify-start items-center'>
      <Nav />
      <Landing />
    </div>
  ); // end return
};

export default App;
