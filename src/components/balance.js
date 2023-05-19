import React from "react";
import { UserContext } from '../UserContext.js';

function Balance() {
  const ctx = React.useContext(UserContext);

  return (
    <div className="card mb-3">
      <div className="card-header">Balance</div>
      <div className="card-body">
        do stuff
      </div>
    </div>
  )
}

export default Balance;