import React from 'react'
import { Button } from '../../Button/Button'

type SettingsButtonType = {
    error: string
    changeCountAndStorageCallback: (type: string) => void
}

export const SettingsButton: React.FC<SettingsButtonType> = (
    {
        error, changeCountAndStorageCallback
    }) => {
    return (
        <Button
            type={ 'set' }
            isDisabled={ !!error?.length }
            changeCountAndStorageCallback={ changeCountAndStorageCallback }
        />
    )
}