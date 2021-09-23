import React from 'react'
import s from './ErrorMessage.module.css'
import { useSelector } from 'react-redux'
import { errorMessageSelector } from '../../../../store/selectors/counter'

export const ErrorMessage = React.memo(() => {
    const errorMessage = useSelector(errorMessageSelector)
    return <p className={ s.errorMessage }>{ errorMessage }</p>
})