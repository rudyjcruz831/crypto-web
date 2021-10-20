import {Container, Row, Col} from 'react-bootstrap'
import CardCryptoInfo from './CardCryptoInfo'
import RecomendationCard from './RecomendationCard'

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
            <Row>
            <Col>
                <hr />
            </Col>
            <Col>
                <hr />                
            </Col>
            </Row>
            
            <Row>
                <Col>
                    <RecomendationCard crypto={crypto} type="Bitcoin"/>
                </Col>
                <Col>
                    <RecomendationCard crypto={crypto} type="Ethereum"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Info;