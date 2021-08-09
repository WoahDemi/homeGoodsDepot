import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { Link, useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap"
import LoadingIcon from "../Pages/LoadingIcon"
import "../Styles/ViewHome.css"

const API = apiURL();

function Home() {
  const [home, setHome] = useState({});
  const { id } = useParams();
  let history = useHistory()

  const updateSave = async () => {
    let newHome = {...home, "saved": !home.saved}
    setHome({...newHome})
    try {
      await axios.put(`${API}/homes/${id}`, newHome)
    } catch (error) {
      console.log(error)
    }
  }

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
    if (home.property_type === "SFH") {
      return "Single Family Home"
    } else if (home.property_type === "MFH") {
      return "Multiple Family Home"
    } else {
      return "Condo"
    }
  }

  const formatMoney = (num) => {
    let formatter = new Intl.NumberFormat('en-US',
      {
        style: 'currency', currency: 'USD',
        maximumFractionDigits: 0
      }
    );

    return formatter.format(num);
  }

  return (
    <div className="container1 row m-1">
      <div className="col-md-1"></div>
      {Object.keys(home).length === 0 ? <LoadingIcon /> : <img className="img col-12 col-md-6" src={home.image} alt={home.id} />}
      <div className="col-md-1"></div>
      <div className="container2 col-6 col-md-4 ">
        <h2>{home.address}, {home.state}</h2>
        <h3>{formatMoney(home.price)}</h3>
        <ul className="property-feature ">
          <li className="li"><strong>Property Features</strong></li>
          <li className="li">{typeOfProperty()}</li>
          <li className="li">{home.number_of_bathrooms} bathrooms</li>
          <li className="li">{home.number_of_bedrooms} bedrooms</li>
          <li className="li">{home.parking ? "Parking" : "No Parking"}</li>
          {home.saved ? <li className="li">⭐ </li> : <li className="li">Not saved</li>}
        </ul>
        <div className="buttons col-6">
          <Link to={`/homes/${id}/edit`}><Button variant="outline-primary">Edit Home</Button></Link>
          <Button id="deleteBtn" variant="outline-danger" onClick={deleteHome}>Delete</Button>
          <Button id="deleteBtn" variant="outline-success" onClick={updateSave}>{home.saved ? "Unsave" : "Save"}</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;


<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>