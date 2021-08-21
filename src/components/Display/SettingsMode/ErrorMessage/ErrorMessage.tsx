import React from 'react'
import s from './ErrorMessage.module.css'

type ErrorMessageType = {
    message: string
}

export const ErrorMessage: React.FC<ErrorMessageType> = ({ message }) => {
    return <p className={ s.errorMessage }>{ message }</p>
}