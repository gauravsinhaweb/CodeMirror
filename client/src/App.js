import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./pages/History";
import Input from "./pages/Input";
import Login from "./pages/Login";
import OutputCode from "./pages/OutputCode";
import Profile from "./pages/Profile";
import TakePhoto from "./pages/TakePhoto";
import WebcamCapture from "./pages/Webcam";
import useAuth from "./hook/useAuth";

function App() {
  const [iscodefill, setiscodefill] = useState(false);
  const [output, setoutput] = useState("");
  const [code, setcode] = useState("");
  const [signInWithGoogle, LogOut, user, userID, codeoutput] = useAuth();

  console.log(iscodefill);
  return (
    <>
      <div className="bg-primary text-white">
        {" "}
        <Router>
          <Switch>
            <Route path="/" exact>
              <TakePhoto setcode={setcode} userID={userID} />
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
              <OutputCode
                outputcode={output}
                userID={userID}
                codeoutput={codeoutput}
              />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/history" exact>
              <History />
            </Route>
            <Route path="/profile" exact>
              <Profile
                signInWithGoogle={signInWithGoogle}
                LogOut={LogOut}
                user={user}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
