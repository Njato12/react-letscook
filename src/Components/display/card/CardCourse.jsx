import React from 'react'
import Text from '../../General/Text'
import { Rating } from '@mui/material'


export default function CardCourse({ picture, className, children, statue }) {
    return (
        <div>
            <img src={picture} alt="" />
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

            <Text tag='p' className='lesson' text={children} />
            <Text tag='a' className={className} text={statue} />

        </div>
    )
}
