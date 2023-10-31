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
      <div>
        <Route path = "/" component = {<div><Home values = {homeData}/></div>}/>
        <Route path = "./games" component = {<div><Games values = {gameData}/></div>}/>
        <Route path = "/art" component = {<div><Games values = {artData}/></div>}/>
        <Route path = "/AIBias" component = {<div><Games values = {biasData}/></div>}/>
        <Route path = "/binaryInformation" component = {<div><Games values = {binaryData}/></div>}/>
        <Route path = "/CScareers" component = {<div><Games values = {careerData}/></div>}/>
        <Route path = "/zines" component = {<div><Games values = {zineData}/></div>}/>
      </div>
      
    </HashRouter>
    
  );
}

// needs to become HashRouter eventually
export default App;
