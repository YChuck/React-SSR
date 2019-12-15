// store入口文件
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'

const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})

export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
    const defaultState = window.__context ? window.__context : {}
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}