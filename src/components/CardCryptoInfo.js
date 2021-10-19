import {Card} from 'react-bootstrap'
import CryptoInfo from './CryptoInfo'

const CardCryptoInfo = (props) => {

    // const doSomething = () => {
    //     console.log(props.crypto)
    // }

    // doSomething()

    return (
        <Card>
            <Card.Header>{props.headerName}</Card.Header>
            <CryptoInfo exchanges={props.crypto.Exchanges} type={props.type} />
        </Card>
    )
}

CardCryptoInfo.defaultProps = {
    headerName: "Crypto Currency",
}

export default CardCryptoInfo