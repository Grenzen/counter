import React, { useState } from 'react'
import { Counter } from './components/Counter/Counter'
import s from './App.module.css'

type AppProps = {
    startMinValue: number
    startMaxValue: number
}

export type InterfaceType = 'counter' | 'settings'

export const App: React.FC<AppProps> = ({ startMinValue, startMaxValue }) => {
    let minData = sessionStorage.getItem('minValue') ? sessionStorage.getItem('minValue') as string : startMinValue
    let maxData = sessionStorage.getItem('maxValue') ? sessionStorage.getItem('maxValue') as string : startMaxValue

    const [minValue, setMinValue] = useState<number>(+minData)
    const [maxValue, setMaxValue] = useState<number>(+maxData)
    const [count, setCount] = useState<number>(minValue)
    const [error, setError] = useState<string>('')
    const [interfaceMode, setInterfaceMode] = useState<InterfaceType>('counter')

    return (
        <div className={ s.appContainer }>
            <Counter
                count={ count }
                minValue={ minValue }
                maxValue={ maxValue }
                interfaceMode={ interfaceMode }
                error={ error }
                setErrorCallback={ setError }
                setCountCallback={ setCount }
                setMinValueCallback={ setMinValue }
                setMaxValueCallback={ setMaxValue }
                setInterfaceModeCallback={ setInterfaceMode }
            />
        </div>
    )
}

