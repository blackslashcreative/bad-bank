import React from "react";
import { UserContext } from '../UserContext.js';

function Deposit() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Deposit</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default Deposit;