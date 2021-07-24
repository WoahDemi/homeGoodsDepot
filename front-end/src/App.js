import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from "./Pages/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="AppDiv">
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
         <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">🏡 HomeGoods Depot 🏡</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/homes">Available HomeGoods</Nav.Link>
              <Nav.Link href="/homes/new">Add a Listing</Nav.Link>
            </Nav>
          </Container>
        </Navbar> 
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
