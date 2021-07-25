import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { Link, useParams, useHistory } from "react-router-dom";
import {Button} from "react-bootstrap"
import "../Styles/ViewHome.css"

const API = apiURL();

function Home() {
  const [home, setHome] = useState({});
  const { id } = useParams();
  let history = useHistory()


  const deleteHome = async () => {
    try {
      await axios.delete(`${API}/homes/${id}`)
      history.push(`/homes`)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const getHome = async () => {
      try {
        const res = await axios.get(`${API}/homes/${id}`);
        setHome(res.data);
      } catch (error) {
        history.push(`/404`)
        console.log(error);
      }
    };
    getHome();
  }, [id, history]);

  const typeOfProperty = () => {
    if (home.property_type === "SFH"){
      return "Single Family Home"
    } else if (home.property_type === "MFH"){
      return "Multiple Family Home"
    } else {
      return "Condo"
    }
  }

  return (
    <div className="container1"> 
      <img className="img" src={home.image} alt={home.id} />
      <div className="container2">
          <h2>{home.address}, {home.state}</h2>
          <h3>${home.price}</h3>
          <ul className="property-feature">
            <li className="li"><strong>Property Features</strong></li>
            <li className="li">{typeOfProperty()}</li>
            <li className="li">{home.number_of_bathrooms} bathrooms</li>
            <li className="li">{home.number_of_bedrooms} bedrooms</li>
            <li className="li">{home.parking ? "Parking" : "No Parking"}</li>
            <li className="li">{home.saved ? "Saved" : "Not Saved"}</li>
          </ul>
          <div className="buttons">
            <Link to={`/homes/${id}/edit`}><Button variant="outline-primary">Edit Home</Button></Link>
            <Button id="deleteBtn" variant="outline-primary" onClick={deleteHome}>Delete</Button>
          </div>
       </div> 
    </div>
  );
}

export default Home;
