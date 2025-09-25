import React from 'react';
export default function Home() {
  return (
    <section>
      <h1 style={{color:'#0ef', fontSize:'2.5rem', textAlign:'center', marginBottom:20}}>Cosmic Explorer</h1>
      <p style={{textAlign:'center', fontSize:'1.3rem', maxWidth:700, margin:'0 auto 24px', background:'rgba(10,10,35,0.7)', padding:'18px 24px', borderRadius:16, boxShadow:'0 0 12px #0ef'}}>
        Welcome to <b>Cosmic Explorer</b> – your gateway to the wonders of the universe! Dive into a world of interactive learning, mind-bending games, and fascinating facts about space, science fiction, and the search for extraterrestrial life.
      </p>
      <div style={{textAlign:'center', maxWidth:700, margin:'0 auto 24px', background:'rgba(20,20,50,0.7)', padding:'16px 20px', borderRadius:14, boxShadow:'0 0 8px #0ef'}}>
        <h2 style={{color:'#fff', fontSize:'1.5rem', marginBottom:8}}>🚀 Space Competition</h2>
        <p style={{fontSize:'1.1rem', marginBottom:0}}>
          <b>Think you know space?</b> Test your knowledge in our <b>Cosmic Competition</b>! Compete with friends, answer challenging questions, and climb the leaderboard for a chance to win cosmic prizes. <br />
          <span style={{color:'#0ef'}}>Stay tuned for upcoming events and details on how to enter!</span>
        </p>
      </div>
      <div style={{textAlign:'center', maxWidth:700, margin:'0 auto 24px', background:'rgba(10,30,60,0.7)', padding:'16px 20px', borderRadius:14, boxShadow:'0 0 8px #0ef'}}>
        <h2 style={{color:'#fff', fontSize:'1.5rem', marginBottom:8}}>🤖 AI Space Chatbot</h2>
        <p style={{fontSize:'1.1rem', marginBottom:0}}>
          Meet our <b>AI Space Chatbot</b>! Ask questions about black holes, planets, aliens, or anything cosmic. The chatbot is here to help you explore, learn, and have fun—just type your question and get instant answers.
        </p>
      </div>
      <div style={{textAlign:'center', maxWidth:700, margin:'0 auto 24px', background:'rgba(10,10,35,0.6)', padding:'14px 18px', borderRadius:12, boxShadow:'0 0 6px #0ef'}}>
        <h2 style={{color:'#fff', fontSize:'1.2rem', marginBottom:6}}>🌌 What Can You Explore?</h2>
        <ul style={{listStyle:'none', padding:0, margin:0, fontSize:'1.05rem', color:'#bdf'}}>
          <li>• Play the <b>Black Hole Game</b> and experience the pull of gravity</li>
          <li>• Watch real <b>UFO videos</b> and analyze the unknown</li>
          <li>• Discover <b>space phenomena</b> and cosmic mysteries</li>
          <li>• Calculate the odds of <b>alien life</b> with the Drake Equation</li>
          <li>• Explore <b>planets</b>, <b>exoplanets</b>, and the <b>Star Wars</b> universe</li>
          <li>• Learn <b>fun facts</b> and meet our creative team</li>
        </ul>
      </div>
      <p style={{textAlign:'center', fontSize:'1.1rem', color:'#aaa', marginTop:18}}>
        Use the navigation above to start your cosmic journey!
      </p>
    </section>
  );
}
