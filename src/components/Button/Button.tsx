import React from 'react'
import s from './Button.module.css'
import { InterfaceType } from '../../App'

type ButtonTypes = {
    type: 'inc' | 'reset' | 'set'
    text: string
    disabled?: boolean
    count: number
    minValue: number
    maxValue: number
    interfaceMode: InterfaceType
    setCountCallback?: (count: number) => void
    setInterfaceModeCallback?: (mode: InterfaceType) => void
}

export const Button: React.FC<ButtonTypes> = (
    {
        count, type, text,
        setCountCallback,
        minValue, maxValue, disabled,
        setInterfaceModeCallback, interfaceMode,

    }) => {
    let mode = (count > minValue && type === 'reset') ? 'active' :
        (count < maxValue && type === 'inc') ? 'active' :
            (type === 'set' && !disabled) ? 'active' : 'disabled'


    const onClickHandler = () => {
        switch (type) {
            case 'inc':
                setCountCallback && setCountCallback(++count)
                break
            case 'reset':
                setCountCallback && setCountCallback(minValue)
                break
            case 'set':
                const changeInterface = interfaceMode === 'counter'
                    ? 'settings' : 'counter'
                setCountCallback && setCountCallback(minValue)
                sessionStorage.setItem('minValue', `${ minValue }`)
                sessionStorage.setItem('maxValue', `${ maxValue }`)
                setInterfaceModeCallback && setInterfaceModeCallback(changeInterface)
                break
        }
    }

    return (
        <button
            className={ [s.buttonCommon, s[ `${ mode }` ]].join(' ') }
            onClick={ onClickHandler }
            disabled={ mode === 'disabled' }
        >
            { text }
        </button>
    )
}