import * as actions from '../actions/counter'
import { counterReducer } from './counter'
import { CounterStateType } from './counter'

const initialState: CounterStateType = {
    minValue: '0',
    maxValue: '5',
    count: '0',
    errorMessage: '',
    interfaceMode: 'display',
}

test('should set correct min value', () => {
    const endState = counterReducer(initialState, actions.setMinValue({ minValue: '3' }))
    expect(initialState).not.toEqual(endState)
    expect(initialState.minValue).toBe('0')
    expect(endState.minValue).toBe('3')
})

test('should set correct max value', () => {
    const endState = counterReducer(initialState, actions.setMaxValue({ maxValue: '12' }))
    expect(initialState).not.toEqual(endState)
    expect(initialState.maxValue).toBe('5')
    expect(endState.maxValue).toBe('12')
})

test('should save correct values to localStorage', () => {
    counterReducer(initialState, actions.saveSettings())
    const savedMinValue = localStorage.getItem('minValue')
    const savedMaxValue = localStorage.getItem('maxValue')

    expect(savedMinValue).toBe('0')
    expect(savedMaxValue).toBe('5')
})

test('should set correct error message', () => {
    const endState = counterReducer(
        initialState,
        actions.setErrorMessage({ errorMessage: 'min value should be lower than max value' }),
    )

    expect(initialState).not.toEqual(endState)
    expect(initialState.errorMessage).toBe('')
    expect(endState.errorMessage).toBe('min value should be lower than max value')
})

test('should correct set interface mode', () => {
    const endState1 = counterReducer(initialState, actions.setInterfaceMode())
    const endState2 = counterReducer(endState1, actions.setInterfaceMode())

    expect(initialState).not.toBe(endState1)
    expect(initialState).not.toBe(endState2)
    expect(endState1).not.toBe(endState2)
    expect(endState1.interfaceMode).toBe('settings')
    expect(endState2.interfaceMode).toBe('display')
})

test('should set correct counter', () => {
    const endState1 = counterReducer(initialState, actions.setMinValue({ minValue: '4' }))
    const endState2 = counterReducer(endState1, actions.setCount())
    expect(initialState).not.toEqual(endState1)
    expect(endState1.minValue).toBe('4')
    expect(endState1.count).toBe('0')
    expect(endState2.count).toBe('4')
})

test('should correct increment counter', () => {
    const endState = counterReducer(initialState, actions.incrementCount())

    expect(initialState).not.toBe(endState)
    expect(initialState.count).toBe('0')
    expect(endState.count).toBe('1')
})

test('should reset count to min value', () => {
    const endState1 = counterReducer(initialState, actions.incrementCount())
    const endState2 = counterReducer(endState1, actions.setCount())

    expect(endState1).not.toBe(endState2)
    expect(endState1.count).toBe('1')
    expect(endState2.count).toBe(endState2.minValue)
})