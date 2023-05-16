import React from "react";
import { UserContext } from '../UserContext.js';
import Card from './cards.js';

function Home() {
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the Bad Bank"
      text="You can use this bank"
      body={JSON.stringify(ctx)}
    />
  )
}

export default Home;