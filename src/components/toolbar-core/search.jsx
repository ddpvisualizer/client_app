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
            <label style={styles.search} key="container">
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
    search: {
        display: 'block',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderRadius: 100,
        transition: 'border-color 0.5s ease',
        padding: '5px 10px',
        textAlign: 'left',
        maxWidth: '100%',
        ':focus': {
            borderColor: 'lightblue'
        }
    },
    searchIcon: {
        fontSize: 20,
        position: 'absolute'
    },
    textInput: {
        fontSize: 15,
        width: '100%',
        paddingLeft: 25,
        paddingTop: 3,
        border: 0,
        color: 'grey',
        ':focus': {
            outline: 0
        }
    }
}

export default Radium(Search)
