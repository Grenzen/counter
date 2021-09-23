import * as types from '../types/counter'

type SetMinValueType = ReturnType<typeof setMinValue>
type SetMaxValueType = ReturnType<typeof setMaxValue>
type SaveSettingsType = ReturnType<typeof saveSettings>
type SetErrorMessageType = ReturnType<typeof setErrorMessage>
type SetInterfaceModeType = ReturnType<typeof setInterfaceMode>
type SetCountType = ReturnType<typeof setCount>
type IncrementCountType = ReturnType<typeof incrementCount>
type ResetCountType = ReturnType<typeof resetCount>

export type CounterActionTypes =
    SetMinValueType | SetMaxValueType | SaveSettingsType | SetErrorMessageType
    | SetInterfaceModeType | SetCountType | IncrementCountType | ResetCountType

type Values = { [ key: string ]: string }
// Settings actions
export const setMinValue = ({ minValue }: Values) => ({
    type: types.SET_MIN_VALUE,
    payload: { minValue },
} as const)

export const setMaxValue = ({ maxValue }: Values) => ({
    type: types.SET_MAX_VALUE,
    payload: { maxValue },
} as const)

export const saveSettings = () => ({
    type: types.SAVE_SETTINGS,
} as const)

export const setErrorMessage = ({ errorMessage }: Values) => ({
    type: types.SET_ERROR_MESSAGE,
    payload: { errorMessage },
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

export const resetCount = () => ({
    type: types.RESET_COUNT,
} as const)