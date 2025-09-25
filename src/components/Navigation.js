import React from 'react';
import './Navigation.css';
export default function Navigation({ setPage }) {
  return (
    <nav className="nav-bar">
      <button onClick={()=>setPage('home')}>Home</button>
      <button onClick={()=>setPage('ufo')}>UFO Videos</button>
      <button onClick={()=>setPage('blackhole')}>Black Hole Game</button>
      <button onClick={()=>setPage('phenomena')}>Space Phenomena</button>
      <button onClick={()=>setPage('aliens')}>Alien Probability</button>
      <button onClick={()=>setPage('planets')}>Planets & Exoplanets</button>
      <button onClick={()=>setPage('starwars')}>Star Wars</button>
      <button onClick={()=>setPage('mission')}>Mission</button>
      <button onClick={()=>setPage('funfacts')}>Fun Facts</button>
      <button onClick={()=>setPage('about')}>About Us</button>
    </nav>
  );
}
