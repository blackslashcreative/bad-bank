import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

function Nav() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid mb-3">
        <img src={logo} alt="Logo" className="logo d-inline-block align-text-top" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-account/">Create Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit/">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdraw/">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-data/">All Data</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;