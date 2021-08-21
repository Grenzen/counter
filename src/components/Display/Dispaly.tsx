import React from 'react'
import s from './Display.module.css'
import { InterfaceType } from '../../App'
import { CountMode } from './CountMode/CountMode'
import { SettingsMode } from './SettingsMode/SettingsMode'

type DisplayTypes = {
    count: number
    minValue: number
    maxValue: number
    interfaceMode: InterfaceType
    error: string
    setErrorCallback: (error: string) => void
    setMinValueCallback: (value: number) => void
    setMaxValueCallback: (value: number) => void
}


export const Display: React.FC<DisplayTypes> = (
    {
        count, maxValue, minValue,
        interfaceMode, error,
        setMinValueCallback, setMaxValueCallback,
        setErrorCallback,
    }) => {

    return (
        <div className={ s.displayContainer }>
            { interfaceMode === 'counter'
                ? <CountMode
                    count={ count }
                    maxValue={ maxValue }
                />
                : <SettingsMode
                    minValue={ minValue }
                    maxValue={ maxValue }
                    error={ error }
                    setErrorCallback={ setErrorCallback }
                    setMinValueCallback={ setMinValueCallback }
                    setMaxValueCallback={ setMaxValueCallback }
                />
            }
        </div>
    )
}