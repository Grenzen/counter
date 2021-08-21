import React from 'react'
import s from './Display.module.css'

type DisplayTypes = {
    count: number
    maxValue: number
}


export const Display:React.FC<DisplayTypes> = ({ count, maxValue }) => {

    const mode = count < maxValue ? 'count' : 'redCount'

    return (
        <div className={ s.display }>
            <p className={ s[`${ mode }`] }>{ count }</p>
        </div>
    )
}