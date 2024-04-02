import React from 'react'
import Text from '../../../General/Text'
import filterRecipe from './filterRecipe.scss'
import CardCourse from '../../card/CardCourse'
import cheeseBurger from '../../../../assets/image/cheeseBurger.png'
import macCheese from '../../../../assets/image/mac&cheese.png'
import salade from '../../../../assets/image/salade.png'
import caramel from '../../../../assets/image/caramel.png'
import cheesecake from '../../../../assets/image/cheesecake.png'
import japan from '../../../../assets/image/japanesPancake.png'
function FilterRecipe() {
    const diet = ['Diary free', 'Egg free', 'sugar free', 'Glutten free']
    const allergies = ['Glutten', 'Legme', 'Fruit', 'Grain']
    const cuisine = ['Asian', 'Italian', 'Mexican', 'Thai']
    const goals = ['Wheigth loss', 'Freshness', 'Activeness', 'Rich nutritions']

    const filtre = (arr) => {
        return (
            <>
                {arr.map((tbl, idx) => <Text tag='p' className='textFilter' text={tbl} key={idx} />)}
            </>
        )
    }
    return (
        <div className='filterRec'>
            <div className="container_filter">
                <div className="filtVar">
                    <Text tag='h3' className='textFilter h3' text='Filter Recipes' />

                    <Text tag='h3' className='textFilter' text='Diet' />
                    {filtre(diet)}
                </div>
                <div className="filtVar">
                    <Text tag='h3' className='textFilter' text='Allergies' />
                    {filtre(allergies)}
                </div>
                <div className="filtVar">
                    <Text tag='h3' className='textFilter' text='Cuisine' />
                    {filtre(cuisine)}
                </div><div className="filtVar">
                    <Text tag='h3' className='textFilter' text='Goals' />
                    {filtre(goals)}
                </div>
            </div>
            <div className="card_courses">
                <div className="container_c super_delicious">
                    <Text tag='h2' className='title_c' text='Super Delicious' />
                    <div className="cardLesson">
                        <CardCourse picture={cheeseBurger} className='public' children='Cheese burger' statue='Public' />
                        <CardCourse picture={macCheese} className='public' children='Mac & Cheese' statue='Public' />
                        <CardCourse picture={salade} className='private' children='Salad caesar with chicken' statue='Private' />
                    </div>

                </div>
                <div className="container_c sweety_tooth">
                    <Text tag='h2' className='title_c' text='Sweety Tooth' />
                    <div className="cardLesson">
                        <CardCourse picture={caramel} className='public' children='Caramel pots' statue='Public' />
                        <CardCourse picture={cheesecake} className='private' children='Cheesecake' statue='Private' />
                        <CardCourse picture={japan} className='public' children='Japanese Pancake' statue='Public' />
                    </div>

                </div>


            </div>


        </div>
    )
}

export default FilterRecipe