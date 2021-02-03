import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Prefrences from "./components/Prefrences/Prefrences";
import Whale from "./components/Whale/Whale";
import Manatee from "./components/Manatee/Manatee";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <h1>
        Title
      </h1>
      
      <BrowserRouter>
      <nav>
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
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
          <Route path="/manatee" >
            <Manatee />
          </Route>
          <Route path="/prefrences">
            <Prefrences />
          </Route>
          <Route exact path="/whale">
            <Whale/>
          </Route>
          <Route path="/whale/:name">
            {/* using URL params */}
            <Whale/>
          </Route>
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
