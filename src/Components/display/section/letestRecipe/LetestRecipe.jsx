import React from 'react'
import Text from '../../../General/Text'
import './latest.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import test from '../../../../assets/image/test.png'

export default function LetestRecipe() {
    return (
        <div>
            <Text tag='h2' className='title_c t_latest' text='Latest recipe' />
            <Splide aria-label="My Favorite Images" options={
                {
                    autoplay: true,
                    interval: 2000,
                    perPage: 4,
                    type: 'loop',
                    gap: 30
                }
            }>
                <SplideSlide>
                    <img src={test} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={test} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={test} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={test} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={test} alt="Image 2" />
                </SplideSlide>
            </Splide>
        </div>

    )
}
