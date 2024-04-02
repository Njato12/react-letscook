import React from 'react'
import Text from '../../../General/Text'
import './cardCollection.scss'
export default function CardCollection({ picture, className, children, nbr }) {
    return (
        <div className='CardCollection'>
            <img src={picture} alt="" />
            <div className="nbr_recipes">
                <Text tag='p' className='p_collection' text={children} />
                <Text tag='a' className={className} text={nbr} />
            </div>

        </div>
    )
}
