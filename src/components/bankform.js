import React        from 'react';
import { useState, useContext } from 'react';
import { BankContext } from '../BankContext.js';

function BankForm({handle, hideEmail}){
  const ctx = useContext(BankContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('');
    const user = ctx.users.find(user => user.username === username);
    if (!user) {
      setErrorMessage('This username is invalid.');
      return;
    }
    if (user.password !== password) {
      setErrorMessage('Invalid password. Please check and try again.');
      return;
    }
    handle({username:username,email:email,password:password});
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
        <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>Create Account</button>
      </form>
      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
    </>
  )  
}

export default BankForm;