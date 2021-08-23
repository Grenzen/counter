import React, { ChangeEvent } from 'react'
import s from './SettingsMode.module.css'
import { ErrorMessage } from './ErrorMessage/ErrorMessage'

type SettingsModeType = {
    minValue: number
    maxValue: number
    error: string
    changeValuesInSettingsCallback: (input: HTMLInputElement) => void
}

export const SettingsMode: React.FC<SettingsModeType> = (
    {
        minValue, maxValue, error, changeValuesInSettingsCallback,
    }) => {
    
    const inputClass = error.length ? s.inputError : s.inputCorrect
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => changeValuesInSettingsCallback(e.currentTarget)

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
            <ErrorMessage message={ error }/>
        </>
    )
}