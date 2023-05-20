import React        from 'react';
import { useState, useContext } from 'react';
import { BankContext } from '../BankContext.js';

function BankForm({formName, hideEmail}){
  const ctx = useContext(BankContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('');
    const userExists = ctx.users.find(user => user.username === username);
    const userEmailExists = ctx.users.find(user => user.email === email);
    if (formName === "Login") {
      // Handle Login Form
      if (!userExists) {
        setErrorMessage('This username is invalid.');
        return;
      }
      if (userExists.password !== password) {
        setErrorMessage('Invalid password. Please check and try again.');
        return;
      }
      ctx.loggedInUser = username;   
      setSuccessMessage('Logged in as ' + username);
    }
    if (formName === "Create Account") {
      // Handle Create Account Form
      if (userExists || userEmailExists) {
        setErrorMessage('This user has already been registered. Please log in.');
      }
      if (!username) {
        setErrorMessage('Please set a username.');
        return;
      }
      if (!password) {
        setErrorMessage('Please set a password.');
        return;
      }
      ctx.users.push({ "username": username, "email": email, "password": password, "balance": 100 });
      ctx.loggedInUser = username;
      setSuccessMessage('Your account has been created.');
    }
    if (formName === "Deposit" || formName === "Withdraw") {
      // Handle Deposit / Withdraw
      if(amount) {
        const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
        let prevBalance = currentUser.balance;
        if (formName === "Deposit") {
          currentUser.balance = Number(prevBalance) + Number(amount);
        } else /* withdraw */ {
          if (currentUser.balance >= Number(amount)) {
            currentUser.balance = Number(prevBalance) - Number(amount);
          } else {
            setErrorMessage('Transaction failed.');
          }
        }
        setAmount(currentUser.balance);
      }
      else {
        setErrorMessage('Please set an amount.');
        return;
      }
    }
  }

  const renderFormFields = () => {
    if (formName === "Deposit" || formName === "Withdraw") {
      if (ctx.loggedInUser) {
        const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
        return (
          <>
            <div className="form-group">
              Amount<br/>
              <input type="number" className="form-control" id="amount"
              value={amount} min="0" max={currentUser.balance} onChange={e => setAmount(e.currentTarget.value)} /><br/>
            </div>
            <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>{formName}</button>
            <p className="mt-3">Account Balance: ${currentUser.balance}</p>
          </>
        )
      }
      else {
        return 'Please log in.';
      }
    }
    else
    {
      return (
        <>
          <div className="form-group">
            Name<br/>
            <input type="input" className="form-control" id="name"
            placeholder="Username" value={username} onChange={e => setUsername(e.currentTarget.value)} /><br/>
          </div>
          {!hideEmail && (
            <div className="form-group">
              Email<br/><input type="input" className="form-control" id="email"
              placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            </div>
          )}
          <div className="form-group">
            Password<br/>
            <input type="password" className="form-control" id="password"
            placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          </div>
          <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>{formName}</button>
        </>
      )
    }
  }

  return (
    <>
      <form>
        {renderFormFields()}
      </form>
      {errorMessage && <div className="alert alert-danger mt-3" role="alert">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
    </>
  )  
}

export default BankForm;