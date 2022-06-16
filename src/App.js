import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import DispatchesView from './views/DispatchesView';
import BoxFormView from './views/BoxFormView';
import NoPage from './components/exception/NoPage';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element = { <Navigate to ="/addbox"/> } ></Route>
          <Route path="/addbox" element = { <BoxFormView/> } ></Route>
          <Route path="/listboxes" element = { <DispatchesView/> } ></Route>
          <Route path="*" element = { <NoPage/> } ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
