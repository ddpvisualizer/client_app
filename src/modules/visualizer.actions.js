import API from '../libs/api.js'

export default {

    favored(fips, value) {
        return {
            type: 'FAVORED',
            payload: API.putFavored(fips, value)
        }
    }
}
