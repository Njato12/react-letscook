import './style.scss'
import React from 'react'

export default function Button(props) {
    return (
        <button onClick={props.postUser} className={`btn ${props.className}`}>{props.text}</button>
    )
}
