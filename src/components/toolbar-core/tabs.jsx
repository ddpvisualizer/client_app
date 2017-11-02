import React from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PropTypes from 'prop-types'
import _ from 'lodash'
import FontAwesome from 'react-fontawesome'

import Loader from '../common-core/loader.jsx'

class TabList extends React.Component {

    static propTypes = {
        loading: PropTypes.bool,
        tabs: PropTypes.arrayOf(PropTypes.string),
        items: PropTypes.arrayOf(PropTypes.shape({
            content: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        highlight: PropTypes.string,
        selectedTabIndex: PropTypes.number,
        selectedItemIndex: PropTypes.number,
        showMax: PropTypes.number,
        onShowMaxChange: PropTypes.func,
        onTabClick: PropTypes.func
    }

    static defaultProps = {
        tabs: [],
        items: [{content: 'item1'}, {content: 'item2', icon: 'heart'}, {content: 'item3'}],
        selectedTabIndex: 0,
        selectedItemIndex: 0,
        showMax: 10
    }

    render() {
        return (
            <div style={styles.tablist}>
                <div style={styles.tabsContainer}>
                    <ul style={styles.tabs}>
                        {this.props.tabs.map(this.renderTab.bind(this))}
                    </ul>
                </div>
                <div style={[styles.itemListContainer, (this.props.loading) ? styles.loaderContainer : null]}>
                    {this.props.loading ? <Loader />  : this.renderItemList()}
                </div>
            </div>
        )
    }

    renderTab(tabName, index) {
        let tabStyle = [styles.tabItem, {width: `${100/this.props.tabs.length}%`}]

        if(this.props.selectedTabIndex == index) {
            tabStyle.push(styles.tabItemSelected)
        }

        return (
            <li style={tabStyle} onClick={this.onTabClick.bind(this, index)} key={`tab${index}`}>
                {tabName}
            </li>
        )
    }

    renderItemList() {
        return (
            <ul style={styles.itemList} ref="itemList" onScroll={this.onItemListScroll.bind(this)}>
                {this.getItems().map(this.renderItem.bind(this))}
            </ul>
        )
    }

    renderItem(item, index) {
        let itemStyle = [styles.item]

        if(this.props.selectedItemIndex == index) {
            itemStyle.push(styles.itemSelected)
        }

        return (
            <li style={itemStyle} onClick={this.onItemClick.bind(this, index)} key={`item${index}`}>
                {this.parseHighlight(item.content)}
                {item.icon ? <FontAwesome name={item.icon} style={styles.icon} /> : null}
            </li>
        )
    }

    getItems() {
        return this.props.items.filter((item, index) => index < this.props.showMax)
    }

    onTabClick(index) {
        if(this.props.onTabClick) {
            this.props.onTabClick(index)
        }
    }

    onItemClick(index) {
        if(this.props.onItemClick) {
            this.props.onItemClick(index)
        }
    }

    onItemListScroll() {
        const itemListNode = ReactDOM.findDOMNode(this.refs.itemList)
        let scrolledToBottom = (itemListNode.scrollTop + itemListNode.offsetHeight >= itemListNode.scrollHeight);

        if(scrolledToBottom && this.props.onShowMaxChange) {
            this.props.onShowMaxChange(this.props.showMax + 10)
        }
    }

    parseHighlight(string) {
        let highlight = this.props.highlight

        if(highlight && _.includes(_.lowerCase(string), highlight)) {
            let highlightIndex = _.lowerCase(string).indexOf(highlight)

            return [
                <span key={string + '1'}>{string.substring(0, highlightIndex)}</span>,
                <b key={string + '2'}>{string.substring(highlightIndex, highlightIndex + highlight.length)}</b>,
                <span key={string + '3'}>{string.substring(highlightIndex + highlight.length, string.length)}</span>
            ]
        } else {
            return string
        }
    }
}

const styles = {
    tablist: {
        textAlign: 'left'
    },
    tabsContainer: {
        marginTop: 10
    },
    'tabs': {
        textAlign: 'center',
        listStyleType: 'none',
        padding: 0,
        margin: 0
    },
    'tabItem': {
        display: 'inline-block',
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        borderStyle: 'solid',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 0,
        padding: 10,
        marginRight: -2,
        transition: 'background-color 0.5s ease',
        cursor: 'pointer',
        backgroundColor: '#F5F5F5',
    },
    'tabItemSelected': {
        backgroundColor: '#FFFFFF',
    },
    'loaderContainer': {
        padding: 20
    },
    'itemListContainer': {
        width: '100%',
        marginLeft: 2,
        paddingRight: 2,
    },
    'itemList': {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        height: 300,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderStyle: 'solid',
        overflowY: 'scroll'
    },
    'item': {
        position: 'relative',
        padding: 5,
        transition: 'background-color 0.2s ease',
        cursor: 'default',
        ':hover': {
            backgroundColor: 'lightblue',
        }
    },
    'itemSelected': {
        color: 'white',
        backgroundColor: '#6495ED',
        ':hover': {
            backgroundColor: '#6495ED'
        }
    },
    'icon': {
        color: '#DC143C',
        position: 'absolute',
        right: 10
    }
}

export default Radium(TabList)
