import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Nav/>
        <div className="container mt-3">
          <UserContext.Provider value={{users:[]}}>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
