import _ from 'lodash'

import Reducer from '../libs/reducer.js'

class ToolbarReducer extends Reducer {

    getInitialState() {
        return {
            loading: true,
            searchQuery: '',
            favoredSelected: false,
            counties: [],
            selectedCounty: {},
            showMax: 20
        }
    }

    getTypeHandlers() {
        return {
            'GET_COUNTIES_PENDING': this.onLoading,
            'GET_COUNTIES_FULFILLED': this.onGetCounties,
            'UPDATE_SEARCH': this.onSearchUpdated,
            'SELECT_FAVORED_COUNTIES': this.onFavoredSelected,
            'SELECT_ALL_COUNTIES': this.onAllSelected,
            'SELECT_COUNTY': this.onCountySelected,
            'SHOW_MAX': this.onShowMax
        }
    }

    onLoading(state) {
        return _.merge({}, state, {
            loading: true
        })
    }

    onGetCounties(state, payload) {
        return _.merge({}, state, {
            counties: payload,
            loading: false
        })
    }

    onSearchUpdated(state, payload) {
        return _.merge({}, state, {
            searchQuery: payload,
            showMax: 20
        })
    }

    onFavoredSelected(state) {
        console.log('favored selected')
        return _.merge({}, state, {
            favoredSelected: true,
            showMax: 20
        })
    }

    onAllSelected(state) {
        return _.merge({}, state, {
            favoredSelected: false,
            showMax: 20
        })
    }

    onCountySelected(state, payload) {
        return _.merge({}, state, {
            selectedCounty: payload
        })
    }

    onShowMax(state, payload) {
        return _.merge({}, state, {
            showMax: payload
        })
    }

}

export default ToolbarReducer.getInstance()
