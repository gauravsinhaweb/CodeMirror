import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import ImageUpload from "./pages/ImageUpload/ImageUpload"
import Result from "./pages/Result/Result"
import Chatbot from "./components/Chatbot/Chatbot";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" exact component={ImageUpload} />
        <Route path="/result" exact component={Result} />
      </Switch>
      <Chatbot />
    </Router>
  );
}

export default App;
