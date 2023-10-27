import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import BrowseByGenre from './pages/BrowseByGenre';
import Browse from './pages/Browse';
import Navigation from './components/Navigation';
import Popup from './components/Popup';

function App() {
  return (
   <BrowserRouter>
   <Navigation />
   <Routes>
    <Route path="/" element={<Homescreen />}></Route>
    <Route path="/browse" element={<Browse/>}></Route>
    <Route path="/browsebygenre" element={<BrowseByGenre/>}></Route>
   </Routes>
   <Popup/>
   </BrowserRouter>
  );
}

export default App;
