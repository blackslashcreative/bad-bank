import React from "react";
import BankForm        from './bankform.js';
import { BankContext } from '../BankContext.js';

function Login() {
  const ctx = React.useContext(BankContext);

  function handle(data){
    // Todo: write login handle
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Login</div>
      <div className="card-body">
        <BankForm 
          handle={handle}
          hideName={true}
        />
      </div>
    </div>
  )
}

export default Login;