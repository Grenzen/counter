import * as types from '../types/counter'
import { CounterActionTypes } from '../actions/counter'

export type CounterStateType = {
    minValue: string
    maxValue: string
    count: number
    errorMessage: string
    interfaceMode: 'display' | 'settings'
}

const initialState: CounterStateType = {
    minValue: localStorage.getItem('minValue') as string || '0',
    maxValue: localStorage.getItem('maxValue') as string || '5',
    count: 0,
    errorMessage: '',
    interfaceMode: 'display',
}

export const counterReducer = (state = initialState, action: CounterActionTypes): CounterStateType => {
    switch (action.type) {
        case types.SET_MIN_VALUE: {
            const { minValue } = action.payload
            return { ...state, minValue }
        }
        case types.SET_MAX_VALUE: {
            const { maxValue } = action.payload
            return { ...state, maxValue }
        }
        case types.SAVE_SETTINGS: {
            localStorage.setItem('minValue', state.minValue)
            localStorage.setItem('maxValue', state.maxValue)
            return { ...state }
        }
        case types.SET_ERROR_MESSAGE: {
            const { errorMessage } = action.payload
            return { ...state, errorMessage }
        }
        case types.SET_INTERFACE_MODE: {
            return {
                ...state,
                interfaceMode: state.interfaceMode === 'display' ? 'settings' : 'display',
            }
        }
        case types.SET_COUNT: {
            return {
                ...state,
                count: +state.minValue,
            }
        }
        case types.INCREMENT_COUNT: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case types.RESET_COUNT: {
            return {
                ...state,
                count: +state.minValue
            }
        }
        default:
            return state
    }
}