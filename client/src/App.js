import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Components//Auth/Auth";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Navbar />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
