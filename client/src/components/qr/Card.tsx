import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

type CardProps = {
    index: number,
    card: any,
    handleSwap: Function
}

const Card = (props: CardProps) => {
    const { card, index } = props
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
            }, 750)
        }, 500)
    }

    let classStr = `card card-${5 - (index % 5)}`

    if(exit) classStr += ' exit'
    if(enter) classStr += ' enter'

    return (
        <div className={classStr}>
            <div className="card-content">
                <div className="card-text">
                    { card.text }
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