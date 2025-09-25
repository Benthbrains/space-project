import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import UFOVideos from './pages/UFOVideos';
import BlackHoleGame from './pages/BlackHoleGame';
import SpacePhenomena from './pages/SpacePhenomena';
import AlienProbability from './pages/AlienProbability';
import Planets from './pages/Planets';
import StarWars from './pages/StarWars';
import AboutUs from './pages/AboutUs';
import FunFacts from './pages/FunFacts';
import Mission from './pages/Mission';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const renderPage = () => {
    switch(page) {
      case 'home': return <Home />;
      case 'ufo': return <UFOVideos />;
      case 'blackhole': return <BlackHoleGame />;
      case 'phenomena': return <SpacePhenomena />;
      case 'aliens': return <AlienProbability />;
      case 'planets': return <Planets />;
      case 'starwars': return <StarWars />;
      case 'about': return <AboutUs />;
      case 'funfacts': return <FunFacts />;
      case 'mission': return <Mission />;
      default: return <Home />;
    }
  };
  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
export default App;
