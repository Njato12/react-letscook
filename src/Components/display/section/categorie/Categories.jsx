import React from 'react'
import CardCategorie from '../../card/cardCategori/CardCategorie'
import Text from '../../../General/Text'
import Pasta from '../../../../assets/image/pasta.png'
import Pizza from '../../../../assets/image/pizza.png'
import Vegan from '../../../../assets/image/vegan.png'
import Dessert from '../../../../assets/image/dessert.png'
import Smoothie from '../../../../assets/image/smoothie.png'
import Breakfast from '../../../../assets/image/breakfast.png'
import Dinner from '../../../../assets/image/dinner.png'
import './categories.scss'
export default function Categories() {
    return (
        <div className='container_categories'>
            <Text tag='h2' className='title_c' text='Popular categories' />
            <div className="categories">
                <CardCategorie picture={Pasta} children='Pasta' />
                <CardCategorie picture={Pizza} children='Pizza' />
                <CardCategorie picture={Vegan} children='Vegan' />
                <CardCategorie picture={Dessert} children='Dessert' />
                <CardCategorie picture={Smoothie} children='Smoothie' />
                <CardCategorie picture={Breakfast} children='Breakfast' />
                <CardCategorie picture={Dinner} children='Dinner' />
            </div>

        </div>
    )
}
