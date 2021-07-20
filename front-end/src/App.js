import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/homes`)
      .then(
        (response) => setHomes(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>
      <ul>
        {homes.map((home) => (
          <li key={home.property_type}>{home.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
