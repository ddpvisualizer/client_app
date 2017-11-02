import _ from 'lodash'

import Reducer from '../libs/reducer.js'

class VisualizerReducer extends Reducer {

    getInitialState() {
        return {
            loading: false,
            county: {}
        }
    }

    getTypeHandlers() {
        return {
            'SELECT_COUNTY_PENDING': this.onLoading,
            'SELECT_COUNTY_FULFILLED': this.onGetCounty,
            'FAVORED_FULFILLED': this.onFavored
        }
    }

    onLoading(state) {
        return _.merge({}, state, {
            loading: true
        })
    }

    onGetCounty(state, county) {
        return _.merge({}, state, {
            county: county,
            loading: false
        })
    }

    onFavored(state, payload) {
        return _.merge({}, state, {
            county: _.merge({}, state.county, {
                favored: payload.favored
            })
        })
    }

}

export default VisualizerReducer.getInstance()
