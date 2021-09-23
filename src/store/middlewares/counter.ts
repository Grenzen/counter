import * as actions from '../actions/counter'
import { CounterActionTypes } from '../actions/counter'
import { VALIDATE_VALUE } from '../types/counter'

const notNumber = 'value must be positive integer number'
const positiveNumber = 'value must be positive integer or 0'
const minNotHigherThanMax = 'min value must be less than max value'
const maxNotLessThanMin = 'max value must be more than min value'

export const validationMiddleware = (store: any) => (next: any) => (action: CounterActionTypes) => {
    switch (action.type) {
        case VALIDATE_VALUE: {
            next(actions.clearErrorMessage())
            const { name, value } = action.payload
            const { minValue, maxValue } = store.getState().counter
            const number = parseInt(value)
            if (isNaN(number))
                return next(actions.setErrorMessage({ errorMessage: notNumber }))
            else if (number < 0)
                return next(actions.setErrorMessage({ errorMessage: positiveNumber }))
            switch (name) {
                case 'min value': {
                    return number < maxValue
                        ? next(actions.setMinValue({ minValue: number.toString() }))
                        : next(actions.setErrorMessage({ errorMessage: minNotHigherThanMax }))
                }
                case 'max value': {
                    return number > minValue
                        ? next(actions.setMaxValue({ maxValue: number.toString() }))
                        : next(actions.setErrorMessage({ errorMessage: maxNotLessThanMin }))

                }
            }
            break
        }
        default:
            return next(action)
    }
}