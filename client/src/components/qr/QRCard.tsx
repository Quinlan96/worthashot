import React, { useState, useEffect } from 'react'

import { get } from '../../services/api'

type QRProps = {
    match: {
        params: any
    }
}

type Card = {
    text: string
}

const QR = (props: QRProps) => {
    const { code } = props.match.params

    const [card, setCard] = useState({
        text: ''
    })

    useEffect(() => {
        const request = async () => {
            setCard(await get(`/qr/${code}`))
        }

        request()
    }, [code])

    return (
        <div className="card">
            { card.text }
        </div>
    );
}

export default QR