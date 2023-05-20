import React           from 'react';
import { useContext }  from 'react';
import { BankContext } from '../BankContext.js';

function Withdraw() {
  const ctx = useContext(BankContext);
  const loggedInUser = ctx.loggedInUser;

  function displayBalance(userToCheck) {
    const currentUser = ctx.users.find(user => user.username === userToCheck);
    return 'Account Balance: $' + currentUser.balance;
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Withdraw</div>
      <div className="card-body">
        {loggedInUser && (
          displayBalance(loggedInUser)
        )}
      </div>
    </div>
  )
}

export default Withdraw;