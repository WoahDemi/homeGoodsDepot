import axios from "axios"
import { useState, useEffect } from "react"
import { apiURL } from "../util/apiURL"
import HomeListItem from "./HomeListItem"
const API = apiURL()

const Homes = () => {
    const [homes, setHomes] = useState([])

    const fetchHomes = async () => {
        try {
            const res = await axios.get(`${API}/homes`)
            setHomes(res.data)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        fetchHomes()
    }, [])
    return (
        <div>

            <ul className="Homes">
                {homes.map((home) => <HomeListItem key={home.id} home={home} />)}
            </ul>
        </div>
    )
}

export default Homes