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
    changeValuesInSettingsCallback: (input: HTMLInputElement) => void

}


export const Display: React.FC<DisplayTypes> = (
    {
        count, maxValue, minValue,
        interfaceMode, error, changeValuesInSettingsCallback,
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
                    changeValuesInSettingsCallback={ changeValuesInSettingsCallback }
                />
            }
        </div>
    )
}