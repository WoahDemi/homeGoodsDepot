import { Spinner  } from 'react-bootstrap';
import "../Styles/LoadingIcon.css"

const LoadingIcon = () =>{
    return <Spinner className="spinner" animation="border" variant="primary" />
}

export default LoadingIcon