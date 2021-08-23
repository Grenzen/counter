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
    changeCountAndStorageCallback: (type: string) => void
    changeValuesInSettingsCallback: (input: HTMLInputElement) => void
}


export const Counter: React.FC<CounterTypes> = (
    {
        count, minValue, maxValue,
        interfaceMode, error,
        changeCountAndStorageCallback,
        changeValuesInSettingsCallback,
    }) => {
    return (
        <div className={ s.counterContainer }>
            <Display
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                interfaceMode={ interfaceMode }
                error={ error }
                changeValuesInSettingsCallback={ changeValuesInSettingsCallback }
            />
            <ButtonGroup
                interfaceMode={ interfaceMode }
                count={ count }
                error={ error }
                minValue={ minValue }
                maxValue={ maxValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />
        </div>
    )
}