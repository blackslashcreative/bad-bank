import React from "react";
import { UserContext } from '../UserContext.js';

function Login() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h3>Login</h3>
      {JSON.stringify(ctx)}
    </div>
  )
}

export default Login;