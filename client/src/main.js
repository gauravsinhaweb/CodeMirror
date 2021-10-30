import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./pages/History";
import Input from "./pages/Input";
import Login from "./pages/Login";
import OutputCode from "./pages/OutputCode";
import Profile from "./pages/Profile";
import TakePhoto from "./pages/TakePhoto";
import WebcamCapture from "./pages/Webcam";

function Main() {
  const [iscodefill, setiscodefill] = useState(false);
  const [output, setoutput] = useState("");
  const [code, setcode] = useState("");

  return (
    <>
      <div className="bg-primary text-white">
        {" "}
        <Router>
          <Switch>
            <Route path="/" exact>
              <TakePhoto />
            </Route>

            <Route path="/input">
              <Input
                setcode={setcode}
                code={code}
                setiscodefill={setiscodefill}
                setoutput={setoutput}
              />
            </Route>
            <Route path="/camera" exact>
              <WebcamCapture />
            </Route>
            <Route path="/output" exact>
              <OutputCode outputcode={output} />
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

export default Main;
