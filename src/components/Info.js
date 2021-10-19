import {Container, Row, Col} from 'react-bootstrap'
import CardCryptoInfo from './CardCryptoInfo'

const Info = ({crypto}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Bitcoin</h1>
                    <CardCryptoInfo
                        crypto = {crypto}
                        type = 'Bitcoin'
                        headerName='Price'
                        // examplePorp = {stateVariable}
                    />
                    {/* <hr /> */}
                    {/* <CardInfo headerName='Recomendations'/> */}
                </Col>
                <Col>
                    <h1>Ethereum</h1>
                    <CardCryptoInfo 
                        crypto = {crypto}
                        type = 'Ethereum'
                        headerName='Price'/>
                    {/* <hr /> */}
                    {/* <CardInfo headerName='Recomendations'/> */}
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    {/* <CardCryptoInfo headerName='Recomendations'/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Info;