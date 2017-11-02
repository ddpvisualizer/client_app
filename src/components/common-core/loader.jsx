import React from 'react'
import Radium from 'radium'

class Loader extends React.Component {

    render() {
        return (
            <div style={styles.loader}></div>
        )
    }
}

const spinKeyframes = Radium.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
}, 'spin')

const styles = {
    loader: {
        margin: '0 auto',
        borderWidth: 8,
        borderStyle: 'solid',
        borderColor: '#F3F3F3',
        borderTopColor: '#3498DB',
        borderRadius: '50%',
        width: 64,
        height: 64,
        animation: 'spin 1s linear infinite',
        animationName: spinKeyframes
    }
}

export default Radium(Loader)
