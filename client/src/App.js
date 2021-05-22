import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";

export const UserContaxt = createContext(null)
function App() {
const [pd, setPd] = useState([])
 
  return (
    <UserContaxt.Provider value={[pd, setPd]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
              <Dashboard></Dashboard>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/singleProduct/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </UserContaxt.Provider>
  );
}

export default App;
