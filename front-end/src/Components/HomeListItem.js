import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
 import "../Styles/Card.css"

const HomeListItem = ({ home }) => {
    return (<li className="home-links" key={home.id}>

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
    </li>)
}

export default HomeListItem;