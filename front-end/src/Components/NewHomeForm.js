import axios from "axios"
import { useState, useEffect } from "react"
import { apiURL } from "../util/apiURL"
import { Link, useHistory } from "react-router-dom"

function NewHomeForm() {
    const API = apiURL();
    let history = useHistory()

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
        debugger
        setHome({ ...home, [event.target.id]: event.target.value })
    }
    const handleCheckBox = (event) => {
        setHome({ ...home, [event.target.id]: !home[event.target.id] })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addHome();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Address:</label>
                <input
                    id="address"
                    value={home.address}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Address"
                    required
                />

                <label htmlFor="state">State:</label>
                <input
                    id="state"
                    maxLength="2"
                    value={home.state}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="State initials"
                    required
                />


                <label htmlFor="bathroom">Number of Bathrooms:</label>
                <input
                    id="number_of_bathrooms"
                    value={home.number_of_bathrooms}
                    type="number"
                    min="0"
                    onChange={handleTextChange}
                    placeholder="Number of bathrooms"
                    required
                />


                <label htmlFor="bedroom">Number of Bedrooms:</label>
                <input
                    id="number_of_bedrooms"
                    value={home.number_of_bedrooms}
                    type="number"
                    min="0"
                    onChange={handleTextChange}
                    placeholder="Number of bedrooms"
                    required
                />

                <label htmlFor="price">Cost of Home:</label>
                <input
                    id="price"
                    value={home.price}
                    type="number"
                    min="0"
                    onChange={handleTextChange}
                    placeholder="Cost of home"
                    required
                />
                <br></br>
                <label htmlFor="parking">Parking:</label>
                <input
                    id="parking"
                    value={home.parking}
                    type="checkbox"
                    onChange={handleCheckBox}
                />

                <label htmlFor="property_type">Propety Type:</label>
                <select id="property_type" onChange={handleTextChange} defaultValue="" required>
                    <option disabled ></option>
                    <option value="SFH">SFH</option>
                    <option value="MFH">MFH</option>
                    <option value="CONDO">CONDO</option>
                </select>

                <label htmlFor="image">Image Link:</label>
                <input
                    id="image"
                    value={home.image}
                    type="url"
                    pattern="https://.*"
                    onChange={handleTextChange}
                    placeholder="Image"
                    required
                />

                <label htmlFor="saved">Saved:</label>
                <input
                    id="saved"
                    value={home.saved}
                    type="checkbox"
                    onChange={handleCheckBox}
                />

                <input type="submit" />


            </form>


        </div>
    )


}

export default NewHomeForm;