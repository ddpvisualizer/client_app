import React from 'react'
import {connect} from 'react-redux'
import Toolbar from '../components/toolbar.jsx'
import ToolbarActions from './toolbar.actions.js'
import store from '../store.js'

const mapStateToProps = state => ({
    searchValue: state.toolbar.searchQuery,
    onSearchChange: (searchQuery) => store.dispatch(ToolbarActions.updateSearch(searchQuery))
})

export default connect(mapStateToProps)(Toolbar);
