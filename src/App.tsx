import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import '../src/styles/global.scss'
import Header from './components/header';
import Routes from './routes';

const App: React.FC = () => (
  <>
  
  <BrowserRouter>
    <Header/>
    <Routes />
  </BrowserRouter>
  </>
  
);

export default App;