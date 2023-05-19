import React           from 'react';
import { useContext }  from 'react';
import BankForm        from './bankform.js';
import { BankContext } from '../BankContext.js';

function Login() {
  const ctx = useContext(BankContext);

  function handleLogin(data){
    // Todo: write login handle
  }

  return (
    <div className="card mb-3">
      <div className="card-header">Login</div>
      <div className="card-body">
        <BankForm 
          handle={handleLogin}
          hideEmail={true}
        />
      </div>
    </div>
  )
}

export default Login;