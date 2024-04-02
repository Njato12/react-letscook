import React from 'react'
import CardCollection from '../../card/cardCollection/CardCollection'
import Text from '../../../General/Text'
import sushi from '../../../../assets/image/sushi.png'
import donate from '../../../../assets/image/donate.png'
import cook from '../../../../assets/image/cook.png'
import excquise from '../../../../assets/image/excquise.png'
import chocolat from '../../../../assets/image/chocolat.png'
import eat from '../../../../assets/image/eat.png'
import './collection.scss'
export default function Collection() {
    return (
        <>

            <div className='container_collection'>
                <div className="collection">
                    <CardCollection picture={sushi} className='p-orange' nbr='156recipes' children='Sushi combos for your Next Party' />
                    <CardCollection picture={donate} className='p-orange' nbr='156recipes' children='Everything bagels' />
                    <CardCollection picture={cook} className='p-orange' nbr='156recipes' children='Cook like chefs' />
                    <CardCollection picture={excquise} className='p-orange' nbr='156recipes' children='Excquise dinner made for you' />
                    <CardCollection picture={chocolat} className='p-orange' nbr='156recipes' children='Made a good choicolate cookie' />
                    <CardCollection picture={eat} className='p-orange' nbr='156recipes' children='Eat healthy' />
                </div>
            </div>

        </>

    )
}
