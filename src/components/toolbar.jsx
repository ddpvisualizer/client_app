import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import Search from './toolbar-core/search.jsx'

class Toolbar extends React.Component {

    static propTypes = {
        onSearchChange: PropTypes.func,
        searchValue: PropTypes.string
    }

    render() {
        return (
            <div style={[styles.base]}>
                <div>
                    <Search
                        value={this.props.searchValue}
                        onChange={this.props.onSearchChange} />
                </div>
                <div>
                    <div>
                        Tabs
                    </div>
                    <div>
                        Content
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    base: {
        backgroundColor: 'white',
        width: 300
    }
}

export default Radium(Toolbar)
