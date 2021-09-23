import * as types from '../types/counter'

type SetMinValueType = ReturnType<typeof setMinValue>
type SetMaxValueType = ReturnType<typeof setMaxValue>
type SaveSettingsType = ReturnType<typeof saveSettings>
type SetErrorMessageType = ReturnType<typeof setErrorMessage>
type ClearErrorMessageType = ReturnType<typeof clearErrorMessage>
type ValidateValueType = ReturnType<typeof validateValue>
type SetInterfaceModeType = ReturnType<typeof setInterfaceMode>
type SetCountType = ReturnType<typeof setCount>
type IncrementCountType = ReturnType<typeof incrementCount>

export type CounterActionTypes =
    SetMinValueType | SetMaxValueType | SaveSettingsType | SetErrorMessageType
    | ClearErrorMessageType | ValidateValueType | SetInterfaceModeType | SetCountType | IncrementCountType

type ValuesType = { [ key: string ]: string }
type ValidateType = {
    value: string,
    name: string
}

// Settings actions
export const setMinValue = ({ minValue }: ValuesType) => ({
    type: types.SET_MIN_VALUE,
    payload: { minValue },
} as const)

export const setMaxValue = ({ maxValue }: ValuesType) => ({
    type: types.SET_MAX_VALUE,
    payload: { maxValue },
} as const)

export const saveSettings = () => ({
    type: types.SAVE_SETTINGS,
} as const)

export const setErrorMessage = ({ errorMessage }: ValuesType) => ({
    type: types.SET_ERROR_MESSAGE,
    payload: { errorMessage },
} as const)

export const clearErrorMessage = () => ({
    type: types.CLEAR_ERROR_MESSAGE,
} as const)

export const validateValue = ({ value, name }: ValidateType) => ({
    type: types.VALIDATE_VALUE,
    payload: { value, name },
} as const)

// Display actions
export const setInterfaceMode = () => ({
    type: types.SET_INTERFACE_MODE,
} as const)

export const setCount = () => ({
    type: types.SET_COUNT,
} as const)

export const incrementCount = () => ({
    type: types.INCREMENT_COUNT,
} as const)