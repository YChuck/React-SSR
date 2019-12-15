// store入口文件
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'

const reducer = combineReducers({
    index: indexReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store