import * as React from 'react';
import './style.css';

export default function Home() {
  return (    
    <div style={{backgroundImage: `url("https://jooinn.com/images/fluffy-clouds-background-9.jpg")`}} className={`container text-center mt-4 p-5`}>
      <h1 className={`display-1`}><b>Cloud Hotel</b></h1>
      <p>Your sky high dreamland destination!</p>
    </div>
  );
}
