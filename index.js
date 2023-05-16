const About = require('./about.js').default;
const Home = require('./home.js').default;
const Products = require('./products.js').default;

function Spa() {
  const Route       = ReactRouterDOM.Route;
  const Link        = ReactRouterDOM.Links;
  const HashRouter  = ReactRouterDOM.HashRouter;

  return (
    <HashRouter>
      <div>
        <h1>Routing - Hello World</h1>
        <Link to="/">Home</Link> --
        <Link to="/about/">About</Link> --
        <Link to="/products/">Products</Link> --
        <hr/>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/products/" component={Products} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)
