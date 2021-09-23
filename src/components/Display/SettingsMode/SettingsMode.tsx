import React, { ChangeEvent } from 'react'
import s from './SettingsMode.module.css'
import { ErrorMessage } from './ErrorMessage/ErrorMessage'
import { useSelector } from 'react-redux'
import { counterSelector } from '../../../store/selectors/counter'
import * as actions from '../../../store/actions/counter'
import { useAppDispatch } from '../../../store'

export const SettingsMode = React.memo(() => {
    const dispatch = useAppDispatch()
    const { minValue, maxValue, errorMessage } = useSelector(counterSelector)
    const inputClass = errorMessage ? s.inputError : s.inputCorrect
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const action = actions.validateValue({ value: e.currentTarget.value, name: e.currentTarget.name })
        dispatch(action)
    }

    return (
        <>
            <form className={ s.settingsContainer }>
                <label
                    className={ s.label }
                    htmlFor={ 'min value' }
                >Min value:
                </label>
                <input
                    className={ [s.input, inputClass].join(' ') }
                    name={ 'min value' }
                    type={ 'number' }
                    value={ minValue }
                    onChange={ changeValue }
                />
                <label
                    className={ s.label }
                    htmlFor={ 'min value' }
                >Max value:
                </label>
                <input
                    className={ [s.input, inputClass].join(' ') }
                    name={ 'max value' }
                    type={ 'number' }
                    value={ maxValue }
                    onChange={ changeValue }
                />
            </form>
            <ErrorMessage/>
        </>
    )
})