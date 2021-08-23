import React from 'react'
import { InterfaceType } from '../../App'
import s from './ButtonGroup.module.css'
import { SettingsButton } from './SettingsButton/SettingsButton'
import { CounterButton } from './CounterButton/CounterButton'

type ButtonGroupType = {
    interfaceMode: InterfaceType
    count: number
    error: string
    minValue: number
    maxValue: number
    changeCountAndStorageCallback: (type: string) => void
}

export const ButtonGroup: React.FC<ButtonGroupType> = (
    {
        interfaceMode, count, error,
        minValue, maxValue,
        changeCountAndStorageCallback
    }) => {
    return (
        <div className={ s.buttonsContainer }>
            {
                interfaceMode === 'counter'
                    ? <CounterButton
                        count={ count }
                        minValue={ minValue }
                        maxValue={ maxValue }
                        changeCountAndStorageCallback={ changeCountAndStorageCallback }
                    /> : null
            }
            <SettingsButton
                error={ error }
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />

        </div>
    )
}