import React from 'react'
import Text from '../../../General/Text'
import './cardCategori.scss'
export default function CardCategorie({ picture, children }) {
    return (
        <div>
            <img src={picture} alt="" />
            <Text tag='p' className='p_categorie' text={children} />

        </div>
    )
}
