import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

class Search extends React.Component {

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        value: ''
    }

    render() {
        return (
            <label style={styles.container} key="container">
                <FontAwesome name="search" style={styles.searchIcon} key="searchIcon" />
                <input style={styles.textInput}
                    key="textInput"
                    onChange={this.onChange.bind(this)}
                    value={this.props.value}
                    placeholder="Search..." />
            </label>
        )
    }

    onChange(event) {
        if(this.props.onChange) {
            this.props.onChange(event.target.value)
        }
    }
}

const styles = {
    container: {
        display: 'block',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderRadius: 100,
        transition: 'border-color 0.5s ease',
        padding: '5px 8px',
        textAlign: 'left',
        ':focus': {
            borderColor: 'lightblue'
        }
    },
    searchIcon: {
        fontSize: 20
    },
    textInput: {
        width: 200,
        fontSize: 15,
        marginLeft: 10,
        border: 0,
        color: 'grey',
        ':focus': {
            outline: 0
        }
    }
}

export default Radium(Search)
