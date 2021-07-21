// import axios from "axios";
// import { useState, useEffect } from "react";
// import { apiURL } from "./util/apiURL.js";
// import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from "./Pages/Index"
// const API = apiURL();

 function App() {
  
  return (
    <div>
      <Router >
        <Route path="/homes">
          <Index />
        </Route>
      </Router>
    </div>
  );
}

export default App;
