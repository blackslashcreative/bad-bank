import React from "react";
import Card  from './cards.js';

function BankForm({label, handle, successButton}){
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [name, setName]           = React.useState('');
  const [email, setEmail]         = React.useState('');
  const [password, setPassword]   = React.useState('');

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleFormSubmit(){
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    handle({name:name,email:email,password:password});
    setShow(false);
  }
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      header={label}
      status={status}
      body={show ? (
          <>
          Name<br/>
          <input type="input" className="form-control" id="name"
          placeholder="Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email<br/>
          <input type="input" className="form-control" id="email"
          placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
          Password<br/>
          <input type="password" className="form-control" id="password"
          placeholder="Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>Create Account</button>
          </>
        ) : (
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>{successButton}</button>
          </>
      )}
    />
  )  
}

export default BankForm;