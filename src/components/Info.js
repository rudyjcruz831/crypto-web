
import {Container, Row, Col} from 'react-bootstrap'
import CardInfo from './Card'
const Info = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Bitcoin</h1>
                    <CardInfo headerName='Price'/>
                    <hr />
                    <CardInfo headerName='Recomendations'/>
                </Col>
                <Col>
                    <h1>Ethereum</h1>
                    <CardInfo headerName='Price'/>
                    <hr />
                    <CardInfo headerName='Recomendations'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Info;