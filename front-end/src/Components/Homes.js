import axios from "axios"
import {useState, useEffect} from "react"
import {apiURL} from "../util/apiURL"
import { Link } from "react-router-dom"
// import "../Styles/Styles.css"
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
                   return <Link key={home.id} to={`/homes/${home.id}`}> <li className = "home-links"><img className = "cribs" src={home.image} alt={home.id}/><br/>{home.address}</li> </Link>
                })}
            </ul>
        </div>
    )
}

export default Homes