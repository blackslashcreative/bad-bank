import React from 'react';
import { useContext } from 'react';
import { BankContext } from '../BankContext.js';

function AllData() {
  const ctx = useContext(BankContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <div className="card mb-3">
      <div className="card-header">Bank Data</div>
      <div className="card-body">
        {loggedInUser && <p>{loggedInUser} is logged in.</p>}
        {JSON.stringify(ctx.users, null, '\n')}
      </div>
    </div>
  )
}

export default AllData;