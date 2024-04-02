import React from 'react'
import spagetti from '../../../../assets/image/spagetti.png'
import plat from '../../../../assets/image/plat.png'
import Text from '../../../General/Text'
import './getBook.scss'
import Input from '../../../General/input/Input'
import Button from '../../../General/button/Button'
function GetBook() {
    return (
        <div className='getBook'>
            <div className="img_g">
                <img src={spagetti} alt="" />
                <img src={plat} alt="" />
            </div>

            <div className="container_get">
                <div className="text_g">
                    <Text tag='h2' className='title_c' text='Get the recipe book!!!' />
                    <Text tag='p' text='A recipe book , guiding both novice and experienced' />
                    <Text tag='p' text=' cooks through the art of preparing delightful dishes.' />
                    <Text tag='p' text='Or contact us  :+854 745 963' />
                </div>
                <div className="inp_btn">
                    <Input text='text' placeholder='E-mail' />
                    <Button className="btn_sing btn--orange " text="Get" />
                </div>


            </div>


        </div>
    )
}

export default GetBook