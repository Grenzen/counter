import React from 'react'
import { Display } from '../Display/Dispaly'
import { Button } from '../Button/Button'
import s from './Counter.module.css'

type CounterTypes = {
    count: number
    setCountCallback: (count: number) => void
    minValue: number
    maxValue: number
}


export const Counter:React.FC<CounterTypes> = ({ count, setCountCallback, minValue, maxValue }) => {
    return (
        <div className={ s.counterContainer }>
            <Display
                count={ count }
                maxValue={ maxValue }
            />
            <div className={ s.buttonsContainer }>
                <Button
                    text={ 'inc' }
                    type={ 'inc' }
                    count={ count }
                    setCountCallback={ setCountCallback }
                    minValue={ minValue }
                    maxValue={ maxValue } />
                <Button
                    text={ 'reset' }
                    type={ 'reset' }
                    count={ count }
                    setCountCallback={ setCountCallback }
                    minValue={ minValue }
                    maxValue={ maxValue } />
            </div>
        </div>
    )
}