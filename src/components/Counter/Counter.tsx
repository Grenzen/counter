import React from 'react'
import { Display } from '../Display/Dispaly'
import s from './Counter.module.css'
import { InterfaceType } from '../../App'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

type CounterTypes = {
    count: number
    minValue: number
    maxValue: number
    interfaceMode: InterfaceType
    error: string
    setErrorCallback: (error: string) => void
    setCountCallback: (count: number) => void
    setMinValueCallback: (value: number) => void
    setMaxValueCallback: (value: number) => void
    setInterfaceModeCallback: (mode: InterfaceType) => void
}


export const Counter: React.FC<CounterTypes> = (
    {
        count, minValue, maxValue,
        interfaceMode, error,
        setMinValueCallback, setMaxValueCallback,
        setCountCallback, setInterfaceModeCallback,
        setErrorCallback,
    }) => {
    return (
        <div className={ s.counterContainer }>
            <Display
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                interfaceMode={ interfaceMode }
                error={ error }
                setErrorCallback={ setErrorCallback }
                setMinValueCallback={ setMinValueCallback }
                setMaxValueCallback={ setMaxValueCallback }
            />
            <ButtonGroup
                interfaceMode={ interfaceMode }
                count={ count }
                error={ error }
                minValue={ minValue }
                maxValue={ maxValue }
                setCountCallback={ setCountCallback }
                setInterfaceModeCallback={ setInterfaceModeCallback }
            />
        </div>
    )
}