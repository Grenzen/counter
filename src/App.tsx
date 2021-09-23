import React from 'react'
import { Counter } from './components/Counter/Counter'
import s from './App.module.css'

export const App = React.memo(() => {
    return (
        <div className={ s.appContainer }>
            <Counter/>
        </div>
    )
})