import "../Styles/LandingPage.css"
import { Container, Card, Modal, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Home() {


  return (
    <div className="Home" >


      {/* <div className="div-card">
      <Card className="text-center bg-transparent w-25" >
        <Card.Body>
          <Card.Title>HomeGoods Depot</Card.Title>
          <Card.Text>
            We turn rich dreams to reality.
          </Card.Text>
          <Link to={`/homes`}>
            <Button variant="primary">Find a Home</Button>
          </Link>
        </Card.Body>
      </Card>
      </div> */}



      <div className="find-home-div">
        <Link to={`/homes`}>
          <Button className="find-home-button" variant="dark btn-lg btn-block" >Find a Home Today</Button>
        </Link>
      </div>

      <Image className="image" src="https://i.ytimg.com/vi/mXPjoWckRPg/maxresdefault.jpg" />

    </div>
  );
}

export default Home;