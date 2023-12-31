import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Footer from './components/Footer/Footer';
import './App.css'



// import Test from './pages/Test';

import Test from './pages/Test';
import Feed from './pages/Feed';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';


import SellWithUs from './pages/SellWithUs';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import UserProfile from './pages/UserProfile';


// New Apollo Client config

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', 
});

// Authentication

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Client apollo connection

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// Root App

function App() {


  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
      <Navbar />
      <CategoryBar />
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/test" element={<Test />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/sell"
            element={
              <>
                <SellWithUs />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;