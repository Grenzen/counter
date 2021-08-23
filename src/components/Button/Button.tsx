import React from 'react'
import s from './Button.module.css'

type ButtonTypes = {
    type: 'inc' | 'reset' | 'set'
    isDisabled: boolean
    changeCountAndStorageCallback: (type: string) => void
}

export const Button: React.FC<ButtonTypes> = (
    {
        type, isDisabled,
        changeCountAndStorageCallback,
    }) => {
    let mode = (isDisabled) ? 'disabled' : 'active'

    const onClickHandler = () => changeCountAndStorageCallback(type)

    return (
        <button
            className={ [s.buttonCommon, s[ `${ mode }` ]].join(' ') }
            onClick={ onClickHandler }
            disabled={ isDisabled }
        >
            { type }
        </button>
    )
}