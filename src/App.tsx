import React from 'react';
import './App.scss';
import Packaging from './components/Packaging/Packaging';

const App = () => {
  return (<>
    <div className='app'>
      <img className='app__background' src='img/Pattern.jpg' />
      <div className='app__content'>
        <h1 className='app__title'>Ты сегодня покормил кота?</h1>
        <Packaging />
      </div>
    </div>
  </>);
}

export default App;
