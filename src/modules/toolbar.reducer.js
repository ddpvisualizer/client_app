import _ from 'lodash'

import Reducer from '../libs/reducer.js'

class ToolbarReducer extends Reducer {

    getInitialState() {
        return {
            counties: [],
            searchQuery: '',
            showFavored: false,
            loading: true
        }
    }

    getTypeHandlers() {
        return {
            'UPDATE_SEARCH': this.onSearchUpdated
        }
    }

    onSearchUpdated(state, payload) {
        return _.merge({}, state, {
            searchQuery: payload
        })
    }

}

export default ToolbarReducer.getInstance()
