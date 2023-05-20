import React    from "react";
import BankForm from './bankform.js';

function CreateAccount() {

  return (
    <div className="card mb-3">
      <div className="card-header">Register</div>
      <div className="card-body">
        <BankForm
          formName="Create Account"
        />
      </div>
    </div>
  )
}

export default CreateAccount;