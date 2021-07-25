import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
 import "../Styles/Card.css"

const HomeListItem = ({ home }) => {

    const formatMoney = (num)=>{
        let formatter = new Intl.NumberFormat('en-US', 
        {style: 'currency',currency: 'USD',
        maximumFractionDigits: 0}
        );
          
          return formatter.format(num);
    }


    return (<li className="home-links" key={home.id}>

        <Card style={{ width: '22rem' }}>
            <Card.Img className="top-image" variant="top" src={home.image} />
            <Card.Body>
                <Card.Title>{formatMoney(home.price)}</Card.Title>
                <Card.Text>
                {home.address}, {home.state} 
                </Card.Text>
                <Link to={`/homes/${home.id}`} >
                    <Button variant="primary">View</Button>
                </Link>
            </Card.Body>
        </Card>
    </li>)
}

export default HomeListItem;