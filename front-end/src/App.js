// import axios from "axios";
// import { useState, useEffect } from "react";
// import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
// const API = apiURL();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/homes">
            <Index />
          </Route>
          <Route exact path="/homes/:id">
            <Show />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
