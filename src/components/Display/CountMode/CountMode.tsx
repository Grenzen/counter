import React from 'react'
import s from './CountMode.module.css'
import { counterSelector } from '../../../store/selectors/counter'
import { useSelector } from 'react-redux'

export const CountMode = React.memo(() => {

    const { count, maxValue } = useSelector(counterSelector)
    const mode = +count < +maxValue ? 'count' : 'redCount'
    return (
        <p className={ s[ `${ mode }` ] }>{ count }</p>
    )
})