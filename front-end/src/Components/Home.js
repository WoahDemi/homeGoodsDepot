import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { useParams, useHistory } from "react-router-dom";


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
        console.log(error);
      }
    };
    getHome();
  }, [id]);

  return (
    <div>
      <h2>{home.address}</h2>
      <img src={home.image} alt={home.id} />
      <ul>
        <li>{home.property_type}</li>
        <li>{home.parking ? "Parking" : "No Parking"}</li>
        <li>{home.saved}</li>
        <li>{home.state}</li>
        {/* <li>{home.property_type}</li>
          <li>{home.property_type}</li>
          <li>{home.property_type}</li>
          <li>{home.property_type}</li> */}
      </ul>
      <button>Edit</button>
      <button onClick={deleteHome}>Delete</button>
    </div>
  );
}

export default Home;
