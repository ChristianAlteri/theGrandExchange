import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';
import './App.css'
import { StoreProvider } from './utils/GlobalState';


function App() {
  return (

    // <Router>
      <div>
        <Navbar />
          <StoreProvider>
            <Feed />
          </StoreProvider>
        {/* <Routes>
          <Route path="/" element={<Feed />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
