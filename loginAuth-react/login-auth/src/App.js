import React, { useState } from "react";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Prefrences from "./components/Prefrences/Prefrences";
import Whale from "./components/Whale/Whale";
import Manatee from "./components/Manatee/Manatee";
import Login from "./components/Login/Login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import useToken from "./components/App/useToken";

// function saveToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken))
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return fetchedToken?.token
// }
function App() {
  const {token, setToken} = useToken();
  if (!token) {
    // console.log("TOKEN_: ", token)
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <h1>
        Title
      </h1>

      <BrowserRouter>
        <nav className="navbar">
          <h2>
            NAVBAR
        </h2>
          <ul>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
          <ul>
            <Link to="/manatee">
              Manatee
          </Link>
          </ul>
          <ul>
            <Link to="/prefrences">Prefrences</Link>
          </ul>
          <ul>
            <Link to="/whale">Whale</Link>
          </ul>
          <ul>
            <Link to="/whale/beluga">Beluga</Link>
            {/* using URL parameter from location object's pathname attribute */}
          </ul>
          <ul>
            <Link to="/whale/blueWhale">Blue Whale</Link>
          </ul>
          {/* <ul>
          <Link to="/whale?name=beluga">Beluga</Link>
          passing additional information in search parameters
        </ul>
        <ul>
          <Link to="/whale?name=blueWhale">Blue Whale</Link>
        </ul> */}
        </nav>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/manatee" component={Manatee} />
          <Route path="/prefrences" component={Prefrences}/>
          <Route path="/whale">
            {/* Nested Routing */}
            <Whale />
          </Route>

          {/* <Route exact path="/whale">
            <Whale/>
          </Route> */}
          {/* <Route path="/whale/:name">
            using URL params
            <Whale/>
          </Route> */}
          {/* <Route path="/whale">
            using search parameters
            <Whale />
          </Route> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
