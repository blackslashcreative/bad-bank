import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Nav from "./components/nav.js";
import Home from "./components/home.js";
import CreateAccount from "./components/create-account.js";
import Login from "./components/login.js";
import Deposit from "./components/deposit.js";
import Withdraw from "./components/withdraw.js";
import Balance from "./components/balance.js";
import AllData from "./components/all-data.js";
import { UserContext } from './UserContext.js';

function App() {
  return (
    <Router>
        <Nav/>
        <div className="container mt-3">
          <UserContext.Provider value={{}}>
            <Routes>
              <Route path="/" exact          element={<Home/>} />
              <Route path="/create-account/" element={<CreateAccount/>} />
              <Route path="/login/"          element={<Login/>} />
              <Route path="/deposit/"        element={<Deposit/>} />
              <Route path="/withdraw/"       element={<Withdraw/>} />
              <Route path="/balance/"        element={<Balance/>} />
              <Route path="/all-data/"       element={<AllData/>} />
            </Routes>
          </UserContext.Provider>
        </div>
    </Router>
  );
}

export default App;