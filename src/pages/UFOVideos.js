import React from 'react';
export default function UFOVideos() {
  return (
    <section>
      <h1 style={{color:'#0ef'}}>🛸 UFO Sightings & Evidence</h1>
      <p style={{fontSize:'1.2rem',maxWidth:700,margin:'0 auto 24px',lineHeight:1.7,background:'rgba(10,10,35,0.7)',padding:'18px 24px',borderRadius:16,boxShadow:'0 0 12px #0ef'}}>Watch the most famous UFO sightings, government reports, and mysterious encounters. Real footage, expert interviews, and documentaries.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:32,justifyContent:'center'}}>
        <iframe width="420" height="236" src="https://www.youtube.com/embed/w4HTwSSiOXM" title="Phoenix Lights" frameBorder="0" allowFullScreen style={{borderRadius:12,boxShadow:'0 0 16px #0ef'}}></iframe>
        <iframe width="420" height="236" src="https://www.youtube.com/embed/-JBwH6yHEDo" title="Area 51 Secrets" frameBorder="0" allowFullScreen style={{borderRadius:12,boxShadow:'0 0 16px #0ef'}}></iframe>
        <iframe width="420" height="236" src="https://www.youtube.com/embed/4koYxy5mYPo" title="UFO Evidence" frameBorder="0" allowFullScreen style={{borderRadius:12,boxShadow:'0 0 16px #0ef'}}></iframe>
      </div>
    </section>
  );
}
