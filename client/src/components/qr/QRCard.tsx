import React, { useState, useEffect } from 'react'

import { get } from '../../services/api'
import Card from './Card'

type QRProps = {
    match: {
        params: any
    }
}

const numCards: number = 5;

const QR = (props: QRProps) => {
    const { code } = props.match.params

    const [card, setCard] = useState({
        text: '',
        suggestions: []
    })

    const [swaps, setSwaps] = useState(0)

    useEffect(() => {
        const request = async () => {
            setCard(await get(`/qr/${code}`))
        }

        request()
    }, [code])

    const handleSwap = () => {
        setSwaps(swaps + 1)
    }

    const cards = []

    for(let i = 0; i < numCards; i++) {
        cards.push(<Card key={i} index={i} swaps={swaps} card={card} handleSwap={handleSwap} />)
    }

    return (
        <div className="qr-page">
            <div className="qr-card">
                { cards }
            </div>
        </div>
    )
}

export default QR