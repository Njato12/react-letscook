import React, { useEffect } from 'react'
import Log from '../../Components/display/section/log/Log'
export default function Login({ del, setDel}) {
    useEffect(() => {
        del ? setDel(false) : null
    }, [del])
   
    return (
        <div>
            <Log />
        </div>
    )
}
