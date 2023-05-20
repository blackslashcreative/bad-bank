import React from 'react';
import { useContext } from 'react';
import Login from './login.js';
import { BankContext } from '../BankContext.js';

function Home() {
  const ctx = useContext(BankContext);

  return (
    <div className="container">
      <h1>Welcome to BadBank</h1>
      {!ctx.loggedInUser && (
        <Login/>
      )}
      <p className="text-danger">Your data is not secure, but it's fun to play around with! lol</p>
    </div>
  )
}

export default Home;