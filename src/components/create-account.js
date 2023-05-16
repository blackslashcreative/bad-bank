import React from "react";
import { UserContext } from '../UserContext.js';

function CreateAccount() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Create Account</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default CreateAccount;