import React           from 'react';
import BankForm        from './bankform.js';

function Login() {

  return (
    <div className="card mb-3">
      <div className="card-header">Login</div>
      <div className="card-body">
        <BankForm 
          hideEmail={true}
          formName="Login"
        />
      </div>
    </div>
  )
}

export default Login;