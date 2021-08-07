import "../Styles/LandingPage.css"
import { Modal, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
function Home() {


  return (
    <div className="Home" >

      <div className="find-home-div">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title ><p className="modal-title">HomeGoods Depot</p></Modal.Title>
            </Modal.Header>
            <Link to={`/homes`}>
              <Button className="find-home-button" variant="dark btn-lg btn-block m-2" >Find a Home Today</Button>
            </Link>
        </Modal.Dialog>
      </div>

      <Image className="image" src="https://3sdwfb1xa06f3y7ie9255ali-wpengine.netdna-ssl.com/na/wp-content/uploads/sites/8/house-with-grey-shingles-backyard-pool.jpg" />

    </div>
  );
}

export default Home;