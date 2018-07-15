import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sheets from "./pages/Sheets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Sheets} />
        <Route exact path="/sheets" component={Sheets} />
        <Route exact path="/sheets/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;