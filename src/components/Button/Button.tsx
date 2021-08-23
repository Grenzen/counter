import React from 'react'
import s from './Button.module.css'

type ButtonTypes = {
    type: 'inc' | 'reset' | 'set'
    disabled?: boolean
    count: number
    minValue: number
    maxValue: number
    changeCountAndStorageCallback: (type: string) => void
}

export const Button: React.FC<ButtonTypes> = (
    {
        count, type,
        changeCountAndStorageCallback,
        minValue, maxValue, disabled,

    }) => {
    let mode = (count > minValue && type === 'reset') ? 'active' :
        (count < maxValue && type === 'inc') ? 'active' :
            (type === 'set' && !disabled) ? 'active' : 'disabled'


    const onClickHandler = () => changeCountAndStorageCallback(type)

    return (
        <button
            className={ [s.buttonCommon, s[ `${ mode }` ]].join(' ') }
            onClick={ onClickHandler }
            disabled={ mode === 'disabled' }
        >
            { type }
        </button>
    )
}