import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import toolbarReducer from './toolbar.reducer.js'

export default combineReducers({
    toolbar: toolbarReducer
})
