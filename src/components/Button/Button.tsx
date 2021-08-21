import React from 'react'
import s from './Button.module.css'

type ButtonTypes = {
    type: 'inc' | 'reset'
    text: string
    count: number
    setCountCallback: (count: number) => void
    minValue: number
    maxValue: number
}

export const Button: React.FC<ButtonTypes> = (
    {
        count,
        type,
        text,
        setCountCallback,
        minValue,
        maxValue
    }) => {
    let mode = (count > minValue && type === 'reset') ? 'active' :
        (count < maxValue && type === 'inc') ? 'active' : 'disabled'


    const onClickHandler = () => {
        switch (type) {
            case 'inc':
                setCountCallback(++count)
                break
            case 'reset':
                setCountCallback(minValue)
                break
        }
    }

    return (
        <button
            className={ [s.buttonCommon, s[`${ mode }`]].join(' ') }
            onClick={ onClickHandler }
            disabled={ mode === 'disabled' }
        >
            { text }
        </button>
    )
}