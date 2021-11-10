import {Card} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

const RecomendationsInfo = ({type}) => {
    const [bestPrices, setBestPrices] = useState([])

    useEffect(() => {
        const getBestPrices = async () => {
            try {
                const pricesFromServer = await fetchBestPrice()
                setBestPrices(pricesFromServer)
            } catch(e){
                console.log(e)
            }
            
        }
        getBestPrices()
    }, [])

    const fetchBestPrice = async () => {
        // try {
        const res = await fetch("http://localhost:8081/best")
        const data = await res.json()
        console.log(data)
        return data 
    }

    const TypeCrypto = (value) => {
        return type === value.name
    }
    return (
        <>
            {bestPrices.best_prices && bestPrices.best_prices.filter(TypeCrypto).map( (exchange, index) => (
                <Card.Body key={index}>
                    <Card.Text>
                        {exchange.sell_source} has the best selling price : ${exchange.best_sell}
                    </Card.Text>
                    <Card.Text>
                        {exchange.buy_source} has the best buying price : ${exchange.best_buy}
                    </Card.Text>
                </Card.Body>
            ))}
        </>
    )
}

export default RecomendationsInfo
