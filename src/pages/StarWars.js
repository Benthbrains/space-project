import React from 'react';
export default function StarWars() {
  return (
    <section>
      <h1 style={{color:'#0ef'}}>⭐ Star Wars Universe</h1>
      <p style={{fontSize:'1.2rem',maxWidth:700,margin:'0 auto 24px',lineHeight:1.7,background:'rgba(10,10,35,0.7)',padding:'18px 24px',borderRadius:16,boxShadow:'0 0 12px #0ef'}}>Explore the worlds, ships, and characters of the legendary Star Wars saga. From Tatooine's twin suns to the icy planet Hoth, the Star Wars universe is filled with adventure, mystery, and hope.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:24,justifyContent:'center',margin:'32px 0'}}>
        <iframe width="420" height="236" src="https://www.youtube.com/embed/8Qn_spdM5Zg" title="Star Wars Trailer" frameBorder="0" allowFullScreen style={{borderRadius:12,boxShadow:'0 0 16px #0ef'}}></iframe>
        <iframe width="420" height="236" src="https://www.youtube.com/embed/8Qn_spdM5Zg" title="Star Wars Moments" frameBorder="0" allowFullScreen style={{borderRadius:12,boxShadow:'0 0 16px #0ef'}}></iframe>
      </div>
      <ul style={{textAlign:'left',maxWidth:600,margin:'24px auto'}}>
        <li><b>Tatooine:</b> Desert planet with twin suns, home to Luke Skywalker.</li>
        <li><b>Hoth:</b> Icy world, site of the Rebel Alliance's secret base.</li>
        <li><b>Coruscant:</b> City-covered planet, capital of the Republic.</li>
        <li><b>Endor:</b> Forest moon, home to the Ewoks.</li>
        <li><b>Death Star:</b> Massive space station and superweapon.</li>
        <li><b>Millennium Falcon:</b> Han Solo's legendary ship.</li>
        <li><b>Jedi:</b> Guardians of peace and justice, wielders of the Force.</li>
        <li><b>Sith:</b> Dark side Force users, including Darth Vader and Emperor Palpatine.</li>
      </ul>
    </section>
  );
}
