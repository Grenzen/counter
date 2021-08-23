import React from 'react'
import { Button } from '../../Button/Button'

type SettingsButtonType = {
    count: number
    error: string
    minValue: number
    maxValue: number
    changeCountAndStorageCallback: (type: string) => void
}

export const SettingsButton: React.FC<SettingsButtonType> = (
    {
        count,
        minValue, maxValue,
        error, changeCountAndStorageCallback
    }) => {
    return (
        <Button
            type={ 'set' }
            disabled={ !!error?.length }
            count={ count }
            minValue={ minValue }
            maxValue={ maxValue }
            changeCountAndStorageCallback={ changeCountAndStorageCallback }
        />
    )
}