import {Card} from 'react-bootstrap'
import RecomendationsInfo from './RecomendationsInfo'

const RecomendationCard = (props) => {


    return (
        <Card>
            <Card.Header>Recommendation</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <RecomendationsInfo type ={props.type} exchanges={props.crypto.Exchanges}/>
            </Card.Body>
            
        </Card>
    )
}

export default RecomendationCard
