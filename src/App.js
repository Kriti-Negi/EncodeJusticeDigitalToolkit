import './App.css';
import Home from './Pages/Home';
import Games from './Pages/Games';
import {HashRouter, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<div><Home/></div>}/>
        <Route path = "/games" element = {<div><Games/></div>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

// needs to become HashRouter eventually
export default App;
