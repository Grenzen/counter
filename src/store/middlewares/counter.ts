import * as actions from '../actions/counter'
import { CounterActionTypes } from '../actions/counter'
import { VALIDATE_VALUE } from '../types/counter'

type ValidateValueReturnType = {
    newMinValue: string
    newMaxValue: string
    errorMessage: string
}

type ValidateValueType = {
    value: string
    name: string
    maxValue: string
    minValue: string
}

const errorMessages = {
    notNumber: 'value must be positive integer number',
    positiveNumber: 'value must be positive integer or 0',
    minNotHigherThanMax: 'min value must be less than max value',
    maxNotLessThanMin: 'max value must be more than min value',
}

export const validationMiddleware = (store: any) => (next: any) => (action: CounterActionTypes): CounterActionTypes => {
    switch (action.type) {
        case VALIDATE_VALUE: {
            next(actions.clearErrorMessage())
            const { name, value } = action.payload
            const { minValue, maxValue } = store.getState().counter
            const { newMinValue, newMaxValue, errorMessage } = validateValue({
                value: value, name: name, maxValue: maxValue, minValue: minValue,
            })
            if (errorMessage) return next(actions.setErrorMessage({ errorMessage: errorMessage }))
            return newMinValue
                ? next(actions.setMinValue({ minValue: newMinValue }))
                : next(actions.setMaxValue({ maxValue: newMaxValue }))
        }
        default:
            return next(action)
    }
}

const validateValue = ({ value, name, maxValue, minValue }: ValidateValueType): ValidateValueReturnType => {
    const number = parseInt(value)
    if (isNaN(number))
        return { newMinValue: '', newMaxValue: '', errorMessage: errorMessages.notNumber }
    else if (number < 0)
        return { newMinValue: '', newMaxValue: '', errorMessage: errorMessages.positiveNumber }
    if (name === 'min value') {
        return number < +maxValue
            ? { newMinValue: number.toString(), newMaxValue: '', errorMessage: '' }
            : { newMinValue: '', newMaxValue: '', errorMessage: errorMessages.minNotHigherThanMax }
    } else {
        return number > +minValue
            ? { newMinValue: '', newMaxValue: number.toString(), errorMessage: '' }
            : { newMinValue: '', newMaxValue: '', errorMessage: errorMessages.maxNotLessThanMin }

    }
}
