import './App.css';
import Home from './Pages/Home';
import Games from './Pages/Games';
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';

import homeData from './JsonFiles/homeData';
import gameData from './JsonFiles/gameData';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<div><Home values = {homeData}/></div>}/>
        <Route path = "/games" element = {<div><Games values = {gameData}/></div>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

// needs to become HashRouter eventually
export default App;
