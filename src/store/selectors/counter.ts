import { RootStateType } from '../index'

export const counterSelector = (state: RootStateType) => state.counter
export const minValueSelector = (state: RootStateType) => state.counter.minValue
export const maxValueSelector = (state: RootStateType) => state.counter.maxValue
export const countSelector = (state: RootStateType) => state.counter.count
export const interfaceModeSelector = (state: RootStateType) => state.counter.interfaceMode
export const errorMessageSelector = (state: RootStateType) => state.counter.errorMessage