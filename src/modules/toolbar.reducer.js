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
            showMax: 40
        }
    }

    getTypeHandlers() {
        return {
            'GET_COUNTIES_PENDING': this.onLoading,
            'GET_COUNTIES_FULFILLED': this.onGetCounties,
            'UPDATE_SEARCH': this.onSearchUpdated,
            'SELECT_FAVORED_COUNTIES': this.onFavoredSelected,
            'SELECT_ALL_COUNTIES': this.onAllSelected,
            'SELECT_COUNTY_FULFILLED': this.onCountySelected,
            'SHOW_MAX': this.onShowMax,
            'FAVORED_FULFILLED': this.onFavored
        }
    }

    onLoading(state) {
        return _.merge({}, state, {
            loading: true
        })
    }

    onFavored(state, payload) {
        return _.merge({}, state, {
            counties: state.counties.map(county => {
                if(county.fips == payload.fips) {
                    return _.merge({}, county, {
                        favored: payload.favored
                    })
                } else {
                    return county
                }
            })
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
            showMax: 40
        })
    }

    onFavoredSelected(state) {
        return _.merge({}, state, {
            favoredSelected: true,
            showMax: 40
        })
    }

    onAllSelected(state) {
        return _.merge({}, state, {
            favoredSelected: false,
            showMax: 40
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
