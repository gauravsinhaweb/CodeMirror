import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TakePhoto from "./pages/TakePhoto";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TakePhoto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
