import React from 'react'
import {connect} from 'react-redux'
import Visualizer from '../components/visualizer.jsx'
import VisualizerActions from './visualizer.actions.js'
import store from '../store.js'

const mapStateToProps = ({visualizer}) => _.merge({}, visualizer.county, {
    loading: visualizer.loading,
    onHeartClick: () => store.dispatch(VisualizerActions.favored(visualizer.county.fips, !visualizer.county.favored))
})

export default connect(mapStateToProps)(Visualizer);
