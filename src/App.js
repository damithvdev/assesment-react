import './App.css';
import Cart from './component/Cart';

import Header from './component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListProductsComponent from './component/ListProductsComponent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <ListProductsComponent/>
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
