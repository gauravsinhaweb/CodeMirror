import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./pages/History";
import Input from "./pages/Input";
import Login from "./pages/Login";
import OutputCode from "./pages/OutputCode";
import Profile from "./pages/Profile";
import TakePhoto from "./pages/TakePhoto";
import WebcamCapture from "./pages/Webcam";

function App() {
  const [isCodeFill, setIsCodeFill] = useState(false);
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");

  console.log("code fill =" + isCodeFill);

  let state = {
    code: null,
  };
  return (
    <>
      <div className="bg-primary text-white">
        {" "}
        <Router>
          <Switch>
            <Route path="/" exact>
              <TakePhoto state={state} />
            </Route>
            <Route path="/input">
              <Input
                state={state}
                setCode={setCode}
                code={code}
                setIsCodeFill={setIsCodeFill}
                setOutput={setOutput}
              />
            </Route>{" "}
            <Route path="/output" exact>
              <OutputCode state={state} outputCode={output} />
            </Route>
            <Route path="/camera" exact>
              <WebcamCapture />
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
