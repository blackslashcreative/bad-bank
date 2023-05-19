import React from "react";
import { UserContext } from '../UserContext.js';

function AllData() {
  const ctx = React.useContext(UserContext);

  let printData = '';
  ctx.users.forEach((element) => {
    printData += 'Name: '     + element.name;
    printData += 'Email: '    + element.email;
    printData += 'Password: ' + element.password;
    printData += 'Balance: '  + element.balance;
  });

  return (
    <div className="card mb-3">
      <div className="card-header">Bank Data</div>
      <div className="card-body">
        {printData}
      </div>
    </div>
  )
}

export default AllData;