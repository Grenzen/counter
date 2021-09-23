import React from 'react'
import s from './Button.module.css'
import { useSelector } from 'react-redux'
import { interfaceModeSelector } from '../../store/selectors/counter'

type ButtonTypes = {
    type: 'inc' | 'reset' | 'set'
    isDisabled: boolean
    incrementCountCallback?: () => void
    setCountCallback?: () => void
    setInterfaceModeCallback?: () => void
    saveSettingsToLocalStorageCallback?: () => void
}

export const Button: React.FC<ButtonTypes> = React.memo((
    {
        type, isDisabled, setCountCallback,
        incrementCountCallback, setInterfaceModeCallback,
        saveSettingsToLocalStorageCallback,
    }) => {
    const interfaceMode = useSelector(interfaceModeSelector)
    let mode = (isDisabled) ? 'disabled' : 'active'

    const onClick = () => {
        incrementCountCallback && incrementCountCallback()
        setCountCallback && setCountCallback()
        if (interfaceMode === 'settings') {
            saveSettingsToLocalStorageCallback && saveSettingsToLocalStorageCallback()
            setCountCallback && setCountCallback()
        }
        setInterfaceModeCallback && setInterfaceModeCallback()
    }

    return (
        <button
            className={ [s.buttonCommon, s[ `${ mode }` ]].join(' ') }
            onClick={ onClick }
            disabled={ isDisabled }
        >
            { type }
        </button>
    )
})