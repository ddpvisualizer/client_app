import React from 'react'
import ToolbarController from './modules/toolbar.controller.js'
import PropTypes from 'prop-types'

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <ToolbarController />
            </div>
        )
    }
}
