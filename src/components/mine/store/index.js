import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
// redux-thunk中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// 增强函数，可当成链式函数
// compose用来做增强函数
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer,enhancer)

export default store