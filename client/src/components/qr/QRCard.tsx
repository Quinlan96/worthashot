import React, { useState, useEffect } from 'react'

import { get } from '../../services/api'

import Navbar from '../layouts/Navbar'

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
        <div>
            <Navbar />
            <div className="card">
                <div className="card-text">
                    { card.text }
                </div>
            </div>
        </div>
    );
}

export default QR