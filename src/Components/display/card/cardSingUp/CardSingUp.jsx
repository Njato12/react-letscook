import React, { useState } from 'react'
import logSing from '../../../../assets/image/logSing.png'
import Text from '../../../General/Text'
import GoogleIcon from '../../../icons/GoogleIcon'
import Button from '../../../General/button/Button'
import { TextField } from '@mui/material'
import './cardSingUp.scss'
import axios from 'axios'
import Test from '../../../../../service/userService'

export default function CardSingUp({ textLS }) {
    const [user, setUser] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const postUser = async () => {
       try{ const data = await Test("http://localhost:4400/api/user", user, {
            headers: {
                "Content-Type": "application/json"
            },
        })}
        catch{
            console.error(`${error.message}`);
        }
       
        console.log(data);
        localStorage.setItem('token', data.data.token)

    }
    return (
        <div className='container_s'>
            <div className="container_singUp">
                <img src={logSing} alt="" />
                <div className="wrap_singUp">
                    <Text tag='h1' text={textLS} className='title_LS' />
                    <div className='log_google'>
                        <GoogleIcon />
                        <Text tag='p' text='Connect with Google' className='text_login' />
                    </div>
                    <div>
                        <Text tag='p' text='Or' className='text_login or' />
                    </div>
                    <div className='input-sing'>
                        <TextField onChange={handleChange} label="user Name" variant="standard" name='username' type='text' />
                    </div>
                    <div className='input-log'>
                        <TextField onChange={handleChange} label="E-mail" variant="standard" name='email' type='email' />
                        <TextField onChange={handleChange} label="Password" variant="standard" name='password' type='password' />
                    </div>
                    <Text tag='p' text='By creating an account, you agree to our  Terms of use and Privacy policy' className='forget' />
                    <Button postUser={postUser} className="btn_sing btn--orange " text="Sign up" />
                    <div className="account">
                        <Text tag='p' text='Already have an account? ' className='forget' />
                        <Text tag='p' text='Log in  ' className='forget green' />
                    </div>

                </div>
            </div>
        </div>
    )
}
