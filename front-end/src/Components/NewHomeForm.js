import axios from "axios"
import { useState } from "react"
import { apiURL } from "../util/apiURL"
import { useHistory } from "react-router-dom"
import { Button, Form, Row, Col } from 'react-bootstrap';

function NewHomeForm() {
    const API = apiURL();
    let history = useHistory()
    const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE",
        "FL", "GA", "GU", "HI", "IA",
        "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT",
        "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI",
        "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

    const [home, setHome] = useState({
        address: "",
        state: "",
        number_of_bathrooms: "",
        number_of_bedrooms: "",
        price: "",
        parking: false,
        property_type: "",
        image: "",
        saved: false
    })

    const addHome = async () => {
        try {
            await axios.post(`${API}/homes`, home)
            history.push(`/homes`)
        } catch (error) {
            console.log(error)
        }

    }

    const handleTextChange = (event) => {
        setHome({ ...home, [event.target.id]: event.target.value })
    }
    const handleCheckBox = (event) => {
        setHome({ ...home, [event.target.id]: !home[event.target.id] })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addHome();
    }


    return (<div>

        <Form onSubmit={handleSubmit} className="mx-auto mt-5 w-50 card p-4 bg-light">

            <Row className="mb-3">

                <Col xs={9}>
                    <Form.Group className="mb-1" controlId="address" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" onChange={handleTextChange} value={home.address} required />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Label>State</Form.Label>
                    <Form.Select id="state" onChange={handleTextChange} defaultValue="" required>
                        <option disabled></option>
                        {states.map((state) => {
                            return <option value={state} key={state} >{state}</option>
                        })}
                    </Form.Select>
                </Col>

                {/* <Col>
                    <Form.Group className="mb-3" controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State initials" maxLength="2" value={home.state} onChange={handleTextChange} />
                    </Form.Group>
                </Col> */}

            </Row>

            <Row>
                <Col xs={6}>
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select id="property_type" onChange={handleTextChange} defaultValue="" required>
                        <option disabled></option>
                        <option value="SFH">Single-Family Home</option>
                        <option value="MFH">Multi-Family Home</option>
                        <option value="CONDO">Condo</option>
                    </Form.Select>
                </Col>
                <Col>

                    <Form.Group className="mb-1" controlId="number_of_bathrooms" >
                        <Form.Label>Bathrooms</Form.Label>
                        <Form.Control type="number" placeholder="# of bathrooms" onChange={handleTextChange} value={home.number_of_bathrooms} min="0" required />
                    </Form.Group>
                </Col><Col>

                    <Form.Group className="mb-1" controlId="number_of_bedrooms" >
                        <Form.Label>Bedrooms</Form.Label>
                        <Form.Control type="number" placeholder="# of bedrooms" onChange={handleTextChange} value={home.number_of_bedrooms} min="0" required />
                    </Form.Group>
                </Col>

            </Row>

            <br></br>

            <Row>
                {/* <Col xs={8}>
            <Form.Group controlId="image" className="mb-1">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" onChange={handleTextChange} value={home.image} required/>
            </Form.Group>
            </Col> */}

                <Col xs={8}>
                    <Form.Group className="mb-1" controlId="image" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="url" placeholder="Enter image URL" onChange={handleTextChange} value={home.image} pattern="https://.*" required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="price" >
                        <Form.Label>Total Cost of Home</Form.Label>
                        <Form.Control type="number" placeholder="total cost" onChange={handleTextChange} value={home.price} min="0" required />
                    </Form.Group>
                </Col>

            </Row>

            <br></br>

            <Row className="d-flex justify-content-around">
                <Col>
                    <Form.Group className="ml-3" controlId="parking">
                        <Form.Check type="checkbox" label="Is there parking space?" onChange={handleCheckBox} value={home.parking} />
                    </Form.Group>
                </Col><Col>
                    <Form.Group className="mb-3" controlId="saved">
                        <Form.Check type="checkbox" label="save this house?" onChange={handleCheckBox} value={home.saved} />
                    </Form.Group>
                </Col>
            </Row>



            <div className="d-grid gap-2">
                <Button className="p-2" size="lg" variant="secondary" type="submit">
                    Submit
                </Button>
            </div>

        </Form>

    </div>)
}

export default NewHomeForm;