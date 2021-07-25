import { Navbar, Container, Nav } from "react-bootstrap";
import "../Styles/NavBar.css"

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="nav-format">
        <Nav>
          <Navbar.Brand className="nav-text" href="/">
            🏡 HomeGoods Depot 🏡
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link className="nav-text" href="/homes">
            Available HomeGoods
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="nav-text" href="/homes/new">
            Add a Listing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
