import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Components//Auth/Auth";
import Profile from "./Components/Profile/Profile";
import dotenv from "dotenv";
function App() {
  dotenv.config();
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
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
