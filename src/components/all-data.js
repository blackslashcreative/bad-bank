import React from 'react';
import { useContext } from 'react';
import { BankContext } from '../BankContext.js';

function AllData() {
  const ctx = useContext(BankContext);
  const loggedInUser = ctx.loggedInUser;

  const printRows = () => {
    const users = ctx.users;
    const userTable = users.map(user => {
      return (
        <tr>
          <td>user.username</td>
          <td>user.email</td>
          <td>user.password</td>
        </tr>
      )
    })
    return userTable;
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Bank Data</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </thead>
          <tbody>
            {printRows()}
          </tbody>
        </table>
        {loggedInUser && <p><b className="capitalize">{loggedInUser}</b> is logged in.</p>}
      </div>
    </div>
  )
}

export default AllData;