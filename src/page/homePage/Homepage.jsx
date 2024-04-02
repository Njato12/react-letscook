
import './style.scss'
import React, { useEffect } from 'react'
import Hero from '../../Components/display/Hero'
import FilterRecipe from '../../Components/display/section/course/FilterRecipe'
import Categories from '../../Components/display/section/categorie/Categories'
import GetBook from '../../Components/display/section/getBook/GetBook'
import Collection from '../../Components/display/section/collection/Collection'
import LetestRecipe from '../../Components/display/section/letestRecipe/LetestRecipe'

export default function Home({ del, setDel }) {
    useEffect(() => {
        !del ? setDel(true) : null
    }, [del])
    return (
        <>
            <Hero />
            <FilterRecipe />
            <Categories />
            <GetBook />
            <Collection />
            <section className='slide'>
                <LetestRecipe />
            </section>
        </>

    )
}
