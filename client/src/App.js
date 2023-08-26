import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';
import './App.css'
import { StoreProvider } from './utils/GlobalState';
import CategoryBar from './components/CategoryBar';


function App() {
  return (

    // <Router>
      <div>
        <Navbar />
        <CategoryBar/>
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
