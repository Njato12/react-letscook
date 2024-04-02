import React from 'react'
import Text from '../../../General/Text'
import './cardTextContentHero.scss'
function CardtextContentHero() {
    return (
        <div className='text_hero'>
            <Text tag='p' className='statistic_hero' text="  85% would make this again" />
            <Text tag='h2' text="Easy cheesecake" className="secon_title" color="white" />
            <Text tag='p' text="Inspired by Cheesecake Factory, this New " className='statistic_hero' />
            <Text tag='p' text="York-style cheesecake is rich, dense yet" className='statistic_hero' />
            <Text tag='p' text="creamy and not overly sweet" className='statistic_hero' />
        </div >
    )
}

export default CardtextContentHero