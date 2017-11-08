import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import ToolbarController from './modules/toolbar.controller.js'
import VisualizerController from './modules/visualizer.controller.js'

class App extends React.Component {
    render() {
        return (
            <Radium.StyleRoot>
            <div>
                <h1 style={{textAlign: 'center'}}>DDP Visualizer</h1>
                <div style={styles.app} className="row">
                    <div className="col-md-3">
                        <ToolbarController />
                    </div>
                    <div style={styles.visualizer} className="col-md-9">
                        <VisualizerController />
                    </div>
                </div>
            </div>
            </Radium.StyleRoot>
        )
    }
}

const styles = {
    app: {
        position: 'relative',
        margin: '50px auto',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        padding: 10,
        minHeight: 1110
    },
    visualizer: {
        paddingLeft: 30,
    }
};


export default Radium(App)
