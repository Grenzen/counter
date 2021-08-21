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
    setCountCallback: (count: number) => void
    setInterfaceModeCallback: (mode: InterfaceType) => void
}

export const ButtonGroup: React.FC<ButtonGroupType> = (
    {
        interfaceMode, count, error,
        setCountCallback, minValue, maxValue,
        setInterfaceModeCallback,
    }) => {
    return (
        <div className={ s.buttonsContainer }>
            {
                interfaceMode === 'counter'
                    ? <CounterButton interfaceMode={ interfaceMode }
                                     count={ count }
                                     minValue={ minValue }
                                     maxValue={ maxValue }
                                     setCountCallback={ setCountCallback }
                                     setInterfaceModeCallback={ setInterfaceModeCallback }/>
                    : <SettingsButton
                        error={ error }
                        interfaceMode={ interfaceMode }
                        count={ count }
                        minValue={ minValue }
                        maxValue={ maxValue }
                        setCountCallback={ setCountCallback }
                        setInterfaceModeCallback={ setInterfaceModeCallback }
                    />
            }
        </div>
    )
}