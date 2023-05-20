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
  }

  const renderFormFields = () => {
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
    </>
    )
  }

  return (
    <>
      <form>
        {renderFormFields()}
        <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>{formName}</button>
      </form>
      {errorMessage && <div className="alert alert-danger mt-3" role="alert">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
    </>
  )  
}

export default BankForm;