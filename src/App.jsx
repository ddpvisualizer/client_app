import React from 'react'
import Radium from 'radium'
import ToolbarController from './modules/toolbar.controller.js'
import PropTypes from 'prop-types'

class App extends React.Component {
    render() {
        return (
            <Radium.StyleRoot>
                <div style={{textAlign: 'center'}}>
                    <ToolbarController />
                </div>
            </Radium.StyleRoot>
        )
    }
}

const styles = {

};


export default Radium(App)
