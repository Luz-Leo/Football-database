import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';

// CSS
import './index.css'

// Pages
import Header from './pages/header';
import Home from './pages/home';
import NewPlayer from './pages/newplayer';
import Player from './pages/player';
import Edit from './pages/edit';
import Login from './pages/login';
import Signup from './pages/signup';

export default function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/player' element={<NewPlayer />} />
          <Route path='/player/:id' element={<Player />} />
          <Route path='/player/edit/:id' element={<Edit />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);