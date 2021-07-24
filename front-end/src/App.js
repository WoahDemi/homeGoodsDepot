// import axios from "axios";
// import { useState, useEffect } from "react";
// import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import 'bootstrap/dist/css/bootstrap.min.css';
// const API = apiURL();

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/homes">
            <Index />
          </Route>
          <Route exact path="/homes/new">
            <New />
          </Route>
          <Route exact path="/homes/:id">
            <Show />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
