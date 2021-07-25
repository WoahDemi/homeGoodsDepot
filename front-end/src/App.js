import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";
import NavBar from "./Pages/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="AppDiv">
      <Router>
        <NavBar/> 
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/homes">
              <Index />
            </Route>
            <Route exact path="/homes/new">
              <New />
            </Route>
            <Route exact path="/homes/:id">
              <Show />
            </Route>
            <Route exact path="/homes/:id/edit">
              <Edit />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
