import React from 'react'
import { InterfaceType } from '../../../App'
import { Button } from '../../Button/Button'
import { SettingsButton } from '../SettingsButton/SettingsButton'

type CounterButtonType = {
    interfaceMode: InterfaceType
    count: number
    minValue: number
    maxValue: number
    setCountCallback: (value: number) => void
    setInterfaceModeCallback: (mode: InterfaceType) => void
}

export const CounterButton: React.FC<CounterButtonType> = (
    {
        interfaceMode, count,
        minValue, maxValue,
        setCountCallback, setInterfaceModeCallback
    }) => {
    return (
        <>
            <Button
                text={ 'inc' }
                type={ 'inc' }
                count={ count }
                interfaceMode={ interfaceMode }
                setCountCallback={ setCountCallback }
                minValue={ minValue }
                maxValue={ maxValue }
            />
            <Button
                text={ 'reset' }
                type={ 'reset' }
                count={ count }
                interfaceMode={ interfaceMode }
                setCountCallback={ setCountCallback }
                minValue={ minValue }
                maxValue={ maxValue }
            />
            <SettingsButton
                interfaceMode={ interfaceMode }
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                setInterfaceModeCallback={ setInterfaceModeCallback }
            />
        </>
    )
}