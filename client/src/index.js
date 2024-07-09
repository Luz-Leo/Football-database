import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, useEffect, useState } from 'react';

// CSS
import './index.css';

// Pages
import Header from './pages/header';
import Home from './pages/home';
import NewPlayer from './pages/newplayer';
import Player from './pages/player';
import Edit from './pages/edit';

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/data`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(error => console.error('Error:', error));
  }, [])

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Header />}>
          <Route index element={<Home data={data} setData={setData} />} />
          <Route path='/newplayer' element={<NewPlayer />} />
          <Route path='/player/:id' element={<Player />} />
          <Route path='/player/edit/:id' element={<Edit />} />
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