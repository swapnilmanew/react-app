import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import "./components/Navbar";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
