import React from 'react';
import "./Reward.css";
import { Link } from "react-router-dom";
import Progress from './Progress';

const Reward =()=> {
  return (
    <>
<div className="reward">

<div className="text">
  
   
    <h2>Your cube, your progress-celebrate <br></br> every step. Hover and enjoy!</h2>
    <p>Earn even <span className='red'> more rewards</span> by reaching your streak <span className='red'>goals!</span> </p>
    <h3>Head <span className='red' > back</span> to continue your <span className='red'>winning streak!</span></h3>
     <Link to="/progress"><h5>⇠</h5></Link>
   </div>

<div className="container">
      {/* First cube */}
      <div className="cube">
        <div style={{ '--x': -1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 0, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
      </div>



      {/* Second cube */}
      <div className="cube">
        <div style={{ '--x': -1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 0, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
      </div>

      {/* Third cube */}
      <div className="cube">
        <div style={{ '--x': -1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 0, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
        <div style={{ '--x': 1, '--y': 0 }}>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 1 }}></span>
        </div>
      </div>
    </div>
</div>
    </>
  );
};
export default Reward;
