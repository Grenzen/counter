import React, { useState } from 'react'
import { Counter } from './components/Counter/Counter'
import s from './App.module.css'

type AppProps = {
    minValue: number
    maxValue: number
}

export const App:React.FC<AppProps> = ({ minValue, maxValue }) => {
  const [count, setCount] = useState<number>(minValue)
  return (
      <div className={ s.appContainer }>
        <Counter count={ count } setCountCallback={ setCount }  minValue={ minValue } maxValue={ maxValue } />
      </div>
  )
}

