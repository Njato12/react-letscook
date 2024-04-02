import React from 'react'

function Text({ tag, text, className, size, weigtht, color }) {
    const Tag = tag
    return (
        <Tag className={className} size='16px' weigtht='400px' color='#000' style={{ fontSize: size, color: color, fontWeigtht: weigtht }}>
            {text}
        </Tag>
    )
}

export default Text