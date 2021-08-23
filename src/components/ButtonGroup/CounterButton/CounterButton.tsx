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
        count, minValue, maxValue,
        changeCountAndStorageCallback
    }) => {
    return (
        <>
            <Button
                type={ 'inc' }
                isDisabled={ count === maxValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />
            <Button
                type={ 'reset' }
                isDisabled={ count === minValue }
                changeCountAndStorageCallback={ changeCountAndStorageCallback }
            />
        </>
    )
}