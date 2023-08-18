import React from 'react'; // Import React
import logo from './Assets/exchangelogo.png';
import './App.css';
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <div className="video-container">
        <h1>The Grand Exchange <img src={logo} alt='logo' /></h1>
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Rtp-Slp58GM"
        playing={true}
        volume={0.5}
      />
    </div>
  );
}

export default App;
