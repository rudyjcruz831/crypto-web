import {Container, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation  = () => {
    return (
        <Navbar bg="dark"  varient='dark'>
            <Container fluid >
                <Navbar.Brand ><h1 style={{color: "white"}}>Crypto</h1></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

// const headingStyle = {
//     display: 'flex',
//     justifyContent: 'center',
// }

export default Navigation