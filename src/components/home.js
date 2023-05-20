import React from "react";
import Login from './login.js';
//import { BankContext } from '../BankContext.js';

function Home() {
  //const ctx = React.useContext(UserContext);

  return (
    <div className="container">
      <h1>Welcome to BadBank</h1>
      <Login/>
      <p>Your data is not secure, but it's fun to play around with! lol</p>
    </div>
  )
}

export default Home;