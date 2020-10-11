import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import Logo from '../layouts/Logo'

type CardProps = {
    index: number,
    swaps: number,
    card: {
        suggestions: Array<any>
    },
    handleSwap: Function
}

const Card = (props: CardProps) => {
    const { card, swaps } = props
    const [exit, setExit] = useState(false)
    const [enter, setEnter] = useState(false)

    const handleSwap = (e: React.MouseEvent) => {
        setExit(true)

        setTimeout(() => {
            setExit(false)
            setEnter(true)
            props.handleSwap()

            setTimeout(() => {
                setEnter(false)
            }, 500)
        }, 300)
    }

    const index = 5 - ((props.index + swaps) % 5)

    let classStr = `card card-${index}`

    if(exit) classStr += ' exit'
    if(enter) classStr += ' enter'

    let text = ''

    if(card.suggestions.length) {
        const suggestion = ((index - 1) + swaps) % card.suggestions.length

        text = card.suggestions[suggestion].text

        console.log(index, suggestion, text)
    }

    return (
        <div className={classStr}>
            <div className="card-logo">
                <Logo />
            </div>
            <div className="card-content">
                <div className="card-text">
                    { text }
                </div>
                <div className="card-refresh" onClick={handleSwap}>
                    <FontAwesomeIcon icon={faSync} size="2x" />
                    <span className="card-refresh-text">Another?</span>
                </div>
            </div>
        </div>
    )
}

export default Card