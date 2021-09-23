import React from 'react'
import { Button } from '../../Button/Button'
import { useSelector } from 'react-redux'
import { errorMessageSelector } from '../../../store/selectors/counter'
import { useAppDispatch } from '../../../store'
import * as actions from '../../../store/actions/counter'


export const SettingsButton = React.memo(() => {
    const dispatch = useAppDispatch()
    const errorMessage = useSelector(errorMessageSelector)
    const setInterfaceModeCallback = () => dispatch(actions.setInterfaceMode())
    const saveSettingsToLocalStorageCallback = () => dispatch(actions.saveSettings())
    const setCountCallback = () => dispatch(actions.setCount())

    return (
        <Button
            type={ 'set' }
            isDisabled={ !!errorMessage?.length }
            setInterfaceModeCallback={ setInterfaceModeCallback }
            saveSettingsToLocalStorageCallback={ saveSettingsToLocalStorageCallback }
            setCountCallback={ setCountCallback }
        />
    )
})