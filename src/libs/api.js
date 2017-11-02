import axios from 'axios'

const API_SERVER = 'https://ddpvisualizer-api.herokuapp.com'

function compareStrings(string1, string2) {
    if(string1 > string2) {
        return 1
    } else if (string1 < string2) {
        return -1
    } else {
        return 0
    }
}

export default {
    getCounty: (fips) => {
        return axios.get(`${API_SERVER}/get-county`, {
            params: { fips }
        }).then(result => result.data)
    },

    getCounties() {
        return axios.get(`${API_SERVER}/get-counties`)
            .then(result => result.data.sort((county1, county2) => {
                return compareStrings(county1.name, county2.name) || compareStrings(county1.state, county2.state)
            }))
    },

    putFavored(fips, value) {
        return axios.put(`${API_SERVER}/put-favored`, {
            fips: fips,
            favored: value
        })
    }
}
