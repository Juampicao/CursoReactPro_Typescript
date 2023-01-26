import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';



import {
  ShoppingPage
} from "../02-component-pattern/pages/ShoppingPage";


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        {/* <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/shop" activeClassName="nav-active" exact>Shop</NavLink>
            </li>
          </ul>
        </nav> */}


        <Switch>
         
          <Route path="/shop">
            <ShoppingPage />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}