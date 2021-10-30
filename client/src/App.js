import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Input from "./pages/Input";
import TakePhoto from "./pages/TakePhoto";

function App() {
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
            
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
