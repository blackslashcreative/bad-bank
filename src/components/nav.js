import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about/">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products/">Products</Link>
      </li>
    </ul>
  )
}

export default Nav;