import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules/_reducers.js'

export const history = createHistory()

const enhancers = []
const middleware = [
    reduxPromiseMiddleware(),
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    composedEnhancers
)

export default store
