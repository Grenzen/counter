import React, { useState } from 'react'
import { Counter } from './components/Counter/Counter'
import s from './App.module.css'

type AppProps = {
    startMinValue: number
    startMaxValue: number
}

export type InterfaceType = 'counter' | 'settings'

// Pure Functions
export const pureChangeInterfaceMode = (interfaceMode: InterfaceType): InterfaceType => {
    return interfaceMode === 'counter' ? 'settings' : 'counter'
}

export const setStorage = (minValue:number, maxValue:number): void => {
    sessionStorage.setItem('minValue', `${ minValue }`)
    sessionStorage.setItem('maxValue', `${ maxValue }`)
}

export const App: React.FC<AppProps> = ({ startMinValue, startMaxValue }) => {
    let minData = sessionStorage.getItem('minValue')
        ? sessionStorage.getItem('minValue') as string : startMinValue
    let maxData = sessionStorage.getItem('maxValue')
        ? sessionStorage.getItem('maxValue') as string : startMaxValue

    const [minValue, setMinValue] = useState<number>(+minData)
    const [maxValue, setMaxValue] = useState<number>(+maxData)
    const [count, setCount] = useState<number>(minValue)
    const [error, setError] = useState<string>('')
    const [interfaceMode, setInterfaceMode] = useState<InterfaceType>('counter')

    // BLL
    const changeValuesInSettings = (input: HTMLInputElement) => {
        setError('')
        if (+input.value < 0) {
            setError(`${ input.name } must be positive or 0`)
            return
        }
        switch (input.name) {
            case 'min value':
                +input.value < maxValue
                    ? setMinValue(+input.value)
                    : setError(`${ input.name } must be less than ${ maxValue }`)
                break
            case 'max value':
                +input.value > minValue
                    ? setMaxValue(+input.value)
                    : setError(`${ input.name } must be more than ${ minValue }`)
                break
        }
    }
    const changeInterfaceMode = () => setInterfaceMode(pureChangeInterfaceMode(interfaceMode))

    const changeCountAndStorage = (type: string) => {
        switch (type) {
            case 'inc':
                setCount(() => count + 1)
                break
            case 'reset':
                setCount(() => minValue)
                break
            case 'set':
                if (interfaceMode === 'settings') {
                    setCount(minValue)
                    setStorage(minValue, maxValue)
                }
                changeInterfaceMode()
                break
        }
    }

    return (
        <div className={ s.appContainer }>
            <Counter
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                interfaceMode={ interfaceMode }
                error={ error }
                changeCountAndStorageCallback={ changeCountAndStorage }
                changeValuesInSettingsCallback={ changeValuesInSettings }
            />
        </div>
    )
}