import React from 'react'
import { Button } from '../../Button/Button'
import { SettingsButton } from '../SettingsButton/SettingsButton'

type CounterButtonType = {
    count: number
    minValue: number
    maxValue: number
    changeCountAndStorageCallback: (type: string) => void
}

export const CounterButton: React.FC<CounterButtonType> = (
    {
        count,
        minValue, maxValue,
        changeCountAndStorageCallback
    }) => {
    return (
        <>
            <Button
                type={ 'inc' }
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />
            <Button
                type={ 'reset' }
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />
        </>
    )
}