import React from "react";
import { UserContext } from '../UserContext.js';

function Home() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Home Component</h3>
      {JSON.stringify(ctx.users)}
    </div>
  )
}

export default Home;