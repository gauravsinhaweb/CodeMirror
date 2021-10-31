import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import useAuth from "./hook/useAuth";
import History from "./pages/History";
import Input from "./pages/Input";
import Login from "./pages/Login";
import OutputCode from "./pages/OutputCode";
import Profile from "./pages/Profile";
import TakePhoto from "./pages/TakePhoto";
import WebcamCapture from "./pages/Webcam";

function App() {
  const [loginwWithGoogle, LogOut, user, boards, userID] = useAuth();

  const [iscodefill, setiscodefill] = useState(false);
  const [output, setoutput] = useState("");
  const [code, setcode] = useState("");
  const [load, setload] = useState(false);

  console.log(iscodefill);
  return (
    <>
      <div className="bg-primary text-white">
        {" "}
        <Router>
          <Switch>
            {/* <Route exact path="/history">
              {user && user.displayName ? (
                <Redirect to="/history" />
              ) : (
                <Login />
              )}
            </Route> */}
            <Route path="/" exact>
              <TakePhoto load={load} setcode={setcode} setload={setload} />
            </Route>

            <Route path="/input">
              <Input
                setcode={setcode}
                code={code}
                load={load}
                setload={setload}
                setiscodefill={setiscodefill}
                setoutput={setoutput}
                userID={userID}
              />
            </Route>
            <Route path="/camera" exact>
              <WebcamCapture />
            </Route>
            <Route path="/output" exact>
              <OutputCode outputcode={output} />
            </Route>

            <Route path="/login" exact>
              <Login loginwWithGoogle={loginwWithGoogle} />
            </Route>
            <Route path="/history" exact>
              <History userID={userID} boards={boards} />
            </Route>
            <Route path="/profile" exact>
              <Profile LogOut={LogOut} user={user} boards={boards} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
