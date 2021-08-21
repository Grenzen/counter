import React from 'react'
import { InterfaceType } from '../../../App'
import { Button } from '../../Button/Button'

type SettingsButtonType = {
    interfaceMode: InterfaceType
    count: number
    error?: string
    minValue: number
    maxValue: number
    setCountCallback?: (value: number) => void
    setInterfaceModeCallback: (mode: InterfaceType) => void
}

export const SettingsButton: React.FC<SettingsButtonType> = (
    {
        interfaceMode, count,
        minValue, maxValue,
        setInterfaceModeCallback, error, setCountCallback,
    }) => {
    return (
        <Button
            text={ 'set' }
            type={ 'set' }
            disabled={ !!error?.length }
            interfaceMode={ interfaceMode }
            count={ count }
            minValue={ minValue }
            maxValue={ maxValue }
            setCountCallback={ setCountCallback }
            setInterfaceModeCallback={ setInterfaceModeCallback }
        />
    )
}