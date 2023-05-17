import React from "react";
import { UserContext } from '../UserContext.js';
import Card from './cards.js';

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
    <Card
      header="All Data"
      body={printData}
    />
  )
}

export default AllData;