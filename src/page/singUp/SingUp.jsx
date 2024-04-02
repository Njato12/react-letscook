import React from 'react'
import Singing from '../../Components/display/section/singing/Singing'
import { useEffect } from 'react'

export default function SingUp({ del, setDel }) {
    useEffect(() => {
        del ? setDel(false) : null
    }, [del])
    return (
        <div>
            <Singing />
        </div>
    )
}
