import axios from "axios"
import {useState, useEffect} from "react"
import {apiURL} from "../util/apiURL"
//test add

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
            <ul>
                {homes.map((home) =>{
                   return <li key = {home.id}>{home.address}</li>
                })}

            </ul>
        </div>
    )
}

export default Homes