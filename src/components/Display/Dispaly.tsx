import React from 'react'
import s from './Display.module.css'
import { CountMode } from './CountMode/CountMode'
import { SettingsMode } from './SettingsMode/SettingsMode'
import { useSelector } from 'react-redux'
import { interfaceModeSelector } from '../../store/selectors/counter'

export const Display = React.memo(() => {
    const interfaceMode = useSelector(interfaceModeSelector)

    return (
        <div className={ s.displayContainer }>
            { interfaceMode === 'display'
                ? <CountMode/>
                : <SettingsMode/>
            }
        </div>
    )
})