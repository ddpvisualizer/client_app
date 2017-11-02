import React from 'react'
import {connect} from 'react-redux'
import Toolbar from '../components/toolbar.jsx'
import ToolbarActions from './toolbar.actions.js'
import store from '../store.js'

const mapStateToProps = ({toolbar}) => ({
    loading: toolbar.loading,
    searchQuery: toolbar.searchQuery,
    selectedCounty: toolbar.selectedCounty,
    favoredSelected: toolbar.favoredSelected,
    counties: toolbar.counties,
    showMax: toolbar.showMax,
    onSearchChange: searchQuery => store.dispatch(ToolbarActions.updateSearch(searchQuery)),
    onAllCountiesSelected: () => store.dispatch(ToolbarActions.selectAllCounties()),
    onFavoredCountiesSelected: () => store.dispatch(ToolbarActions.selectFavoredConties()),
    onCountySelected: county => store.dispatch(ToolbarActions.selectCounty(county)),
    onShowMaxChange: max => store.dispatch(ToolbarActions.showMax(max))
})

export default connect(mapStateToProps)(Toolbar);
