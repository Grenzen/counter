import React, { ChangeEvent } from 'react'
import s from './SettingsMode.module.css'
import { ErrorMessage } from './ErrorMessage/ErrorMessage'

type SettingsModeType = {
    minValue: number
    maxValue: number
    error: string
    setErrorCallback: (error: string) => void
    setMinValueCallback: (value: number) => void
    setMaxValueCallback: (value: number) => void
}

export const SettingsMode: React.FC<SettingsModeType> = (
    {
        minValue, maxValue, error,
        setMaxValueCallback, setMinValueCallback,
        setErrorCallback,
    }) => {
    const inputClass = error.length ? s.inputError : s.inputCorrect

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorCallback('')
        const input = e.currentTarget
        if (+input.value < 0) {
            setErrorCallback(`${ e.currentTarget.name } must be positive or 0`)
            return
        }

        switch (input.name) {
            case 'min value':
                +input.value < maxValue
                    ? setMinValueCallback(+input.value)
                    : setErrorCallback(`${ input.name } must be less than ${ maxValue }`)
                break
            case 'max value':
                +input.value > minValue
                    ? setMaxValueCallback(+input.value)
                    : setErrorCallback(`${ input.name } must be more than ${ minValue }`)
                break
        }
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
            <ErrorMessage message={ error }/>
        </>
    )
}