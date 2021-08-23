import React, { ChangeEvent } from 'react'
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
    setCountCallback: (count: number) => void
    setInterfaceModeCallback: (mode: InterfaceType) => void
    changeValueInSettingsCallback: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Counter: React.FC<CounterTypes> = (
    {
        count, minValue, maxValue,
        interfaceMode, error,
        setCountCallback, setInterfaceModeCallback,
        changeValueInSettingsCallback,
    }) => {
    return (
        <div className={ s.counterContainer }>
            <Display
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                interfaceMode={ interfaceMode }
                error={ error }
                changeValueInSettingsCallback={ changeValueInSettingsCallback }
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