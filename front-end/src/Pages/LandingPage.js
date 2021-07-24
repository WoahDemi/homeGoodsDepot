import "../Style/LandingPage.css"
import {Container, Row, Col, Image, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
function Home() {

  
    return (
      <div className="Home" >
        <Container>
          <Row className="align-items-center" >
            <Col  >
              <h2>homeGoodsDepot</h2>
              <h3>We turn rich dreams to reality.</h3>
              <Link to={`/homes`}>
                <Button variant="outline-primary">Find a Home</Button>
              </Link>
            </Col>
            <Col >
              <Image className="image" src="https://www.priceypads.com/wp-content/uploads/2018/05/ISa1ba7g0qkjdn0000000000-2.jpg" fluid />  
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Home;