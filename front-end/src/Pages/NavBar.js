import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav-format">
        <Nav>
            <NavLink className="nav-text" exact to="/">
            🏡 HomeGoods Depot 🏡 
            </NavLink>
        </Nav>
        <Nav>
          <NavLink className="nav-text"  exact to="/homes">
            Available HomeGoods
            </NavLink>
        </Nav>
        <Nav>
        <NavLink className="nav-text"  exact to="/homes/new">
            Add a Listing
            </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
