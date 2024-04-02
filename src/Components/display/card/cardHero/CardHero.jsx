import React from 'react'
import CardtextContentHero from '../cardTextContentHero/CardTextContentHero'
import gateau from '../../../../assets/image/gateauHero.png'
import './cardHero.scss'
function CardHero() {
    return (
        <div className='hero'>
            <div className="container_hero">
                <img src={gateau} alt="" />
                <CardtextContentHero />
            </div>
        </div>
    )
}

export default CardHero