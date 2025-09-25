import React from 'react';
export default function AboutUs() {
  return (
    <section>
      <h1 style={{color:'#0ef'}}>About Us</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:32,maxWidth:900,margin:'0 auto'}}>
        <div style={{background:'rgba(10,10,35,0.85)',borderRadius:16,padding:24,textAlign:'center',boxShadow:'0 0 16px #0ef'}}>
          <img src="https://avatars.githubusercontent.com/u/11600000?v=4" alt="Pedro Henrique de Oliveira Francisco" style={{width:140,borderRadius:12,boxShadow:'0 0 8px #0ef'}} />
          <h3 style={{margin:'12px 0 6px 0'}}>Pedro Henrique de Oliveira Francisco</h3>
          <p style={{fontWeight:'bold',color:'#0ef'}}>Coder</p>
          <p style={{fontSize:'1.1rem'}}>Pedro is a passionate developer who loves building interactive web experiences and solving complex problems with code.</p>
        </div>
        <div style={{background:'rgba(10,10,35,0.85)',borderRadius:16,padding:24,textAlign:'center',boxShadow:'0 0 16px #0ef'}}>
          <img src="https://avatars.githubusercontent.com/u/11600001?v=4" alt="Benjamin Irani Fey" style={{width:140,borderRadius:12,boxShadow:'0 0 8px #0ef'}} />
          <h3 style={{margin:'12px 0 6px 0'}}>Benjamin Irani Fey</h3>
          <p style={{fontWeight:'bold',color:'#0ef'}}>Leader &amp; Coder</p>
          <p style={{fontSize:'1.1rem'}}>Benjamin led the project and contributed to the codebase, ensuring the vision and technical quality of Cosmic Explorer.</p>
        </div>
        <div style={{background:'rgba(10,10,35,0.85)',borderRadius:16,padding:24,textAlign:'center',boxShadow:'0 0 16px #0ef'}}>
          <img src="https://avatars.githubusercontent.com/u/11600002?v=4" alt="Pavlo Barbira" style={{width:140,borderRadius:12,boxShadow:'0 0 8px #0ef'}} />
          <h3 style={{margin:'12px 0 6px 0'}}>Pavlo Barbira</h3>
          <p style={{fontWeight:'bold',color:'#0ef'}}>Designer &amp; Idea Person</p>
          <p style={{fontSize:'1.1rem'}}>Pavlo crafted the visual design, user experience, and contributed creative ideas to make the site beautiful and engaging for all visitors.</p>
        </div>
      </div>
    </section>
  );
}
