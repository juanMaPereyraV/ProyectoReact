import './Loader.scss'
import Spinner from 'react-bootstrap/Spinner';


const Loader = () => {

    return (

        <div className= 'loader'>
            <Spinner animation="border" variant="dark" />

        </div>

    )
}

export default Loader