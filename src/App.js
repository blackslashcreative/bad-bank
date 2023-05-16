import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Nav from "./components/nav.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Products from "./components/products.js";
import { UserContext } from './UserContext.js';

function App() {

  return (
    <Router>
      <div>
        <h1>Routing - Hello World</h1>
        <Nav />
        <hr/>
        <UserContext.Provider value={{users:['peter']}}>
          <Routes>
            <Route path="/" exact    element={<Home />} />
            <Route path="/about/"    element={<About />} />
            <Route path="/products/" element={<Products />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;