import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import { useDispatch } from 'react-redux'
import { validationMiddleware } from './middlewares/counter'

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()

export const store = createStore(rootReducers, applyMiddleware(validationMiddleware))