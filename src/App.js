import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroducePage from './pages/IntroducePage';
import AlgorithmPage from './pages/AlgorithmPage';
import AIPage from './pages/AIPage';
import WebPage from './pages/WebPage';

const App = () => {
  return (
    <>
      <Route component = {MainPage} path = "/" exact/>
      <Route component = {IntroducePage} path = "/introduce" />
      <Route component = {AlgorithmPage} path = "/algorithm" />
      <Route component = {AIPage} path = "/ai" />
      <Route component = {WebPage} path = "/web" />
    </>
  );
};

export default App;