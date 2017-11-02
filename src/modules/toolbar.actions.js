import API from '../libs/api.js'

export default {

    updateSearch(searchQuery) {
        return {
            type: 'UPDATE_SEARCH',
            payload: searchQuery
        }
    },

    selectAllCounties() {
        return {
            type: 'SELECT_ALL_COUNTIES',
            payload: {}
        }
    },

    selectFavoredConties() {
        return {
            type: 'SELECT_FAVORED_COUNTIES',
            payload: {}
        }
    },

    selectCounty(fips) {
        return {
            type: 'SELECT_COUNTY',
            payload: API.getCounty(fips)
        }
    },

    showMax(max) {
        return {
            type: 'SHOW_MAX',
            payload: max
        }
    },

    getCounties() {
        return {
            type: 'GET_COUNTIES',
            payload: API.getCounties()
        }
    }
}
