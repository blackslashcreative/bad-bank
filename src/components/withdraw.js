import React           from 'react';
import { useContext }  from 'react';
import { BankContext } from '../BankContext.js';
import BankForm        from './bankform.js';

function Withdraw() {
  const ctx = useContext(BankContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <div className="card mb-3">
      <div className="card-header">Withdraw</div>
      <div className="card-body">
        <BankForm
          formName="Withdraw"
        />
      </div>
    </div>
  )
}

export default Withdraw;