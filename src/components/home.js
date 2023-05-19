import React from "react";
//import { UserContext } from '../UserContext.js';

function Home() {
  //const ctx = React.useContext(UserContext);

  return (
    <div className="card mb-3">
      <div className="card-header">Welcome to BadBank</div>
      <div className="card-body">
        Your data is not secure, but it's fun to play around with! lol
      </div>
    </div>
  )
}

export default Home;