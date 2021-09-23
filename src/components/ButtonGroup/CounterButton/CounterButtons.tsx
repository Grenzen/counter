import React from 'react'
import { Button } from '../../Button/Button'
import { useSelector } from 'react-redux'
import { counterSelector } from '../../../store/selectors/counter'
import { useAppDispatch } from '../../../store'
import * as actions from '../../../store/actions/counter'

export const CounterButtons = React.memo(() => {
    const dispatch = useAppDispatch()
    const { count, minValue, maxValue } = useSelector(counterSelector)
    const incrementCountCallback = () => dispatch(actions.incrementCount())
    const setCountCallback = () => dispatch(actions.setCount())
    return (
        <>
            <Button
                type={ 'inc' }
                isDisabled={ count === maxValue }
                incrementCountCallback={ incrementCountCallback }
            />
            <Button
                type={ 'reset' }
                isDisabled={ count === minValue }
                setCountCallback={ setCountCallback }
            />
        </>
    )
})