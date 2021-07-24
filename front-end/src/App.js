import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from "./Pages/Edit";

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
      </Router>
    </div>
  );
}

export default App;
