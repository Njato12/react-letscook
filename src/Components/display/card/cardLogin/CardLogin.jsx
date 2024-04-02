import React from 'react'
import './cardLogin.scss'
import Text from '../../../General/Text'
import logSing from '../../../../assets/image/logSing.png'
import GoogleIcon from '../../../icons/GoogleIcon'
import { TextField } from '@mui/material'
import Button from '../../../General/button/Button'
export default function CardLogin({ textLS }) {
    return (
        <div className='container_login'>
            <img src={logSing} alt="" />
            <div className='wrap_textLog'>
                <Text tag='h1' text={textLS} className='title_LS' />
                <div className='log_google'>
                    <GoogleIcon />
                    <Text tag='p' text='Connect with Google' className='text_login' />
                </div>
                <div>
                    <Text tag='p' text='Or' className='text_login or' />
                </div>
                <div className='input-log'>
                    <TextField fullWidth label="E-mail" variant="standard" type='email' />
                    <TextField label="Password" variant="standard" type='password' />
                </div>
                <Text tag='p' text='Forget password?' className='forget' />
                <Button className="btn_sing btn--orange " text="Login" />
                <div className="account">
                    <Text tag='p' text='Dont have an account? ' className='forget' />
                    <Text tag='p' text='Sign up ' className='forget green' />
                </div>
            </div>


        </div>


    )
}
