import axios from "axios"
import { useState, useEffect } from "react"
import { apiURL } from "../util/apiURL"
import HomeListItem from "./HomeListItem"
import { Form, Row, Col } from 'react-bootstrap';
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

    const handleSelect = (event) => {
        const {value} = event.target;
        if(Number(value)===1){
            homes.sort((a, b) => b.price - a.price);
            setHomes([...homes])
        }
        if(Number(value)===2){
            homes.sort((a, b) => a.price - b.price);
            setHomes([...homes])
        }
        if(Number(value)===3){
            homes.sort((a, b) => b.id - a.id);
            setHomes([...homes])
        }
        if(Number(value)===4){
            homes.sort((a, b) => a.state.localeCompare(b.state));
            setHomes([...homes])
        }
        if(Number(value)===5){
            homes.sort((a, b) => b.state.localeCompare(a.state));
            setHomes([...homes])
        }
        if(Number(value)===6){
            homes.sort((a, b) => b.number_of_bedrooms - a.number_of_bedrooms);
            setHomes([...homes])
        }
        if(Number(value)===7){
            homes.sort((a, b) => b.number_of_bathrooms - a.number_of_bathrooms);
            setHomes([...homes])
        }
    }

    useEffect(() => {
        fetchHomes()
    }, [])
    return (
        <div>
                <Row className="m-2 pt-1">
                    <Col sm={7}></Col>
                    <Col sm={1}> <Form.Label className="mt-1">Sort By:</Form.Label></Col>
                    <Col sm={4}><Form.Select className="" id="property_type" onChange={handleSelect} defaultValue="">
                        <option disabled></option>
                        <option value="1">Price (High to Low)</option>
                        <option value="2">Price (Low to High)</option>
                        <option value="3">Newest</option>
                        <option value="4">State (A-Z)</option>
                        <option value="5">State (Z-A)</option>
                        <option value="6"># of Bedrooms</option>
                        <option value="7"># of Bathrooms</option>
                    </Form.Select>
                    </Col>
                </Row>
            <ul className="homes-list">
                {homes.map((home) => <HomeListItem key={home.id} home={home} />)}
            </ul>
        </div>
    )
}

export default Homes