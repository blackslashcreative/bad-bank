import React from "react";
import { UserContext } from '../UserContext.js';

function Home() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Bad Bank</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default Home;