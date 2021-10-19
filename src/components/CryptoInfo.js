import {Card} from 'react-bootstrap'

const CryptoInfo = ({exchanges, type}) => {
    const TypeCrypto = (value) =>{
        return value.name === type
    }
    
    return (
        <>
            {exchanges && exchanges.filter(TypeCrypto).map( (exchange, index) => (
                <Card.Body key={index}>
                    <Card.Title>{exchange.source}</Card.Title>
                    <Card.Text>
                        Buy: ${exchange.buy} 
                    </Card.Text>
                    <Card.Text>
                        Sell: ${exchange.sell}
                    </Card.Text>
                </Card.Body>
            ))}
        </>
    )
}

export default CryptoInfo
