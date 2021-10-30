import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./pages/History";
import InputCode from "./pages/InputCode";
import Login from "./pages/Login";
import OutputCode from "./pages/OutputCode";
import Profile from "./pages/Profile";
import TakePhoto from "./pages/TakePhoto";

function App() {
  return (
    <>
      <div className="bg-primary text-white">
        {" "}
        <Router>
          <Switch>
            <Route path="/" exact>
              <TakePhoto />
            </Route>

            <Route path="/input" exact>
              <InputCode />
            </Route>

            <Route path="/output" exact>
              <OutputCode />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/history" exact>
              <History />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
