import React from 'react'
import s from './ButtonGroup.module.css'
import { SettingsButton } from './SettingsButton/SettingsButton'
import { CounterButtons } from './CounterButton/CounterButtons'
import { useSelector } from 'react-redux'
import { interfaceModeSelector } from '../../store/selectors/counter'

export const ButtonGroup = React.memo(() => {
    const interfaceMode = useSelector(interfaceModeSelector)

    return (
        <div className={ s.buttonsContainer }>
            {
                interfaceMode === 'display'
                    ? <CounterButtons/> : null
            }
            <SettingsButton/>
        </div>
    )
})