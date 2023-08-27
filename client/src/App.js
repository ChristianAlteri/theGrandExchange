import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import { StoreProvider } from './utils/GlobalState';
import CategoryBar from './components/CategoryBar';
import Test from './pages/Test';
import Feed from './pages/Feed';
import Signup from './pages/Signup';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// New Apollo Client config

const httpLink = createHttpLink({
  uri: '/graphql',
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

    <Router>
      <div>
        <Navbar />
        <CategoryBar/>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/store" element={<Storefront />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path='./products/:id' element={<ProductDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
