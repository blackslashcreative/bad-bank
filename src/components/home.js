import React from "react";
//import { UserContext } from '../UserContext.js';
import Card from './cards.js';

function Home() {
  //const ctx = React.useContext(UserContext);

  return (
    <Card
      header="Welcome to BadBank"
      text="Your data is not secure, but it's fun to play around with! lol"
    />
  )
}

export default Home;