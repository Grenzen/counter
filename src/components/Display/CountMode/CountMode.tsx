import React from 'react'
import s from './CountMode.module.css'

type CountModeType = {
    count: number
    maxValue: number
}

export const CountMode: React.FC<CountModeType> = ({ count, maxValue }) => {
    const mode = count < maxValue ? 'count' : 'redCount'
    return (
        <p className={ s[ `${ mode }` ] }>{ count }</p>
    )
}