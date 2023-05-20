import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Nav from "./components/nav.js";
import Home from "./components/home.js";
import CreateAccount from "./components/create-account.js";
//import Login from "./components/login.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";
import Balance from "./components/balance.js";
import AllData from "./components/all-data.js";
import { BankContext } from './BankContext.js';

function App() {
  const defaultContext = {
    loggedInUser: null,
    users: [
      {
        username: 'ghosty', email: 'ghosty@blacksla.sh', password: 'secret', balance: 100
      }
    ]
  };
  return (
    <Router>
        <Nav/>
        <div className="container mt-3">
          <BankContext.Provider value={defaultContext}>
            <Routes>
              <Route path="/" exact          element={<Home/>} />
              <Route path="/create-account/" element={<CreateAccount/>} />
              <Route path="/deposit/"        element={<Deposit/>} />
              <Route path="/withdraw/"       element={<Withdraw/>} />
              <Route path="/all-data/"       element={<AllData/>} />
            </Routes>
          </BankContext.Provider>
        </div>
    </Router>
  );
}

export default App;