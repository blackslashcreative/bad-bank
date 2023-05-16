import React from "react";
import { UserContext } from '../UserContext.js';

function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>All Data</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default AllData;