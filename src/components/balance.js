import React from "react";
import { UserContext } from '../UserContext.js';

function Balance() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Balance</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default Balance;