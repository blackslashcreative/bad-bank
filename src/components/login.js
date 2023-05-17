import React from "react";
import BankForm        from './bankform.js';
// import { UserContext } from '../UserContext.js';

function Login() {
  // const ctx = React.useContext(UserContext);

  function handle(data){
    // Todo: write login handle
  }

  return (
    <BankForm
      label="Login"
      handle={handle}
      /*hideName={true}*/
      hideAmount={true}
      successButton="You are logged in."
    />
  )
}

export default Login;