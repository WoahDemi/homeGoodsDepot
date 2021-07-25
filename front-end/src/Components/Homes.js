import axios from "axios"
import {useState, useEffect} from "react"
import {apiURL} from "../util/apiURL"
import { Link } from "react-router-dom"
import {Card, Button} from "react-bootstrap"
import "../Styles/Card.css"
const API = apiURL()

const Homes = () =>{
    const [homes, setHomes] = useState([])

    const fetchHomes = async() =>{
        try {
            const res = await axios.get(`${API}/homes`)
            setHomes(res.data)
        } catch (error) {
            return error
        }
    }

    useEffect (() =>{
        fetchHomes ()
    }, [])
    return(
        <div>

            <ul className = "Homes">
                {homes.map((home) =>{
                //    return <Link key={home.id} to={`/homes/${home.id}`}> 
                   {/* <li className = "home-links"><img className = "cribs" src={home.image} alt={home.id}/><br/>{home.address}</li>  */}
          return    <li className="home-links" key={home.id}>

                   <Card style={{ width: '22rem' }}>
  <Card.Img className="top-image" variant="top" src={home.image} />
  <Card.Body>
    <Card.Title>${home.price}</Card.Title>
    <Card.Text>
      {home.address}
    </Card.Text>
    <Link to={`/homes/${home.id}`} >
    <Button variant="primary">View</Button>
    </Link>
  </Card.Body>
</Card>
              </li>
                //    </Link>
                })}
            </ul>
        </div>
    )
}

export default Homes