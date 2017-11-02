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
                <div style={styles.app}>
                    <div style={styles.toolbar}>
                        <ToolbarController />
                    </div>
                    <div style={styles.visualizer}>
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
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        padding: 10,
        minHeight: 1110
    },
    toolbar: {
        float: 'left',
        display: 'inline-block',
        width: 300
    },
    visualizer: {
        paddingLeft: 30,
        display: 'inline-block',
        width: '80%'
    }
};


export default Radium(App)
