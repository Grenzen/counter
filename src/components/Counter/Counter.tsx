import React from 'react'
import { Display } from '../Display/Dispaly'
import s from './Counter.module.css'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

export const Counter = React.memo(() => {
    return (
        <div className={ s.counterContainer }>
            <Display/>
            <ButtonGroup/>
        </div>
    )
})