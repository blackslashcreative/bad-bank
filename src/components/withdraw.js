import React from "react";
import { UserContext } from '../UserContext.js';

function Withdraw() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Withdraw</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default Withdraw;