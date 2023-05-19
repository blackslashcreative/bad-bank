import React           from "react";
import BankForm        from './bankform.js';
import { BankContext } from '../BankContext.js';

function CreateAccount() {
  const ctx = React.useContext(BankContext);
  
  function handle(data){
    ctx.users.push({
      name:data.name,
      email:data.email,
      password:data.password,
      balance:100
    });
    return true;
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Create Account</div>
      <div className="card-body">
        <BankForm
          handle={handle}
          hideAmount={true}
          successButton="Add another account"
        />
      </div>
    </div>
  )
}

export default CreateAccount;