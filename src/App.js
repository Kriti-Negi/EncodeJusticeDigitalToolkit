import './App.css';
import Home from './Pages/Home';
import Games from './Pages/Games'
import Art from './Pages/Art';
import Bias from './Pages/Bias';
import Binary from './Pages/Binary';
import Career from './Pages/Career';
import Zine from './Pages/Zine';
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';

import homeData from './JsonFiles/homeData';
import gameData from './JsonFiles/gameData';
import artData from './JsonFiles/artData';
import biasData from './JsonFiles/biasData';
import binaryData from './JsonFiles/binaryData';
import careerData from './JsonFiles/careerData';
import zineData from './JsonFiles/zineData';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element = {<div><Home values = {homeData}/></div>}/>
        <Route path = "./games" element = {<div><Games values = {gameData}/></div>}/>
        <Route path = "./art" element = {<div><Games values = {artData}/></div>}/>
        <Route path = "./AIBias" element = {<div><Games values = {biasData}/></div>}/>
        <Route path = "./binaryInformation" element = {<div><Games values = {binaryData}/></div>}/>
        <Route path = "./CScareers" element = {<div><Games values = {careerData}/></div>}/>
        <Route path = "./zines" element = {<div><Games values = {zineData}/></div>}/>
      </Routes>
      
    </HashRouter>
    
  );
}

// needs to become HashRouter eventually
export default App;
