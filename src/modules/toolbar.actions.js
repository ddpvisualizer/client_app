export default {

    updateSearch(searchQuery) {
        console.log('search query ' + searchQuery)
        return {
            type: 'UPDATE_SEARCH',
            payload: searchQuery
        }
    }
};
