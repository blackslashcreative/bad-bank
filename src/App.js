import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/home.js";
import About from "./components/about.js";
import Products from "./components/products.js";

function App() {

  return (
    <Router>
      <div>
        <h1>Routing - Hello World</h1>
        <Link to="/">Home</Link> --
        <Link to="/about/">About</Link> --
        <Link to="/products/">Products</Link> --
        <hr/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/products/" component={Products} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
