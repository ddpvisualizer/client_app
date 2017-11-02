import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import Search from './toolbar-core/search.jsx'
import TabList from './toolbar-core/tabs.jsx'
import stateCodes from '../libs/state-codes.js'

const countyShape = PropTypes.shape({
    name: PropTypes.string,
    fips: PropTypes.string,
    state: PropTypes.string,
    favored: PropTypes.boolean
})


class Toolbar extends React.Component {

    static propTypes = {
        loading: PropTypes.bool,
        searchQuery: PropTypes.string,
        favoredSelected: PropTypes.bool,
        selectedCounty: countyShape,
        showMax: PropTypes.number,
        counties: PropTypes.arrayOf(countyShape),
        onSearchChange: PropTypes.func,
        onShowMaxChange: PropTypes.func,
        onAllCountiesSelected: PropTypes.func,
        onFavoredCountiesSelected: PropTypes.func,
        onCountySelected: PropTypes.func
    }

    static defaultProps = {
        counties: [],
        selectedCounty: {}
    }

    render() {
        return (
            <div style={[styles.base]}>
                <div>
                    <Search
                        value={this.props.searchQuery}
                        onChange={this.props.onSearchChange} />
                </div>
                <div>
                    <TabList
                    tabs={['All', 'Favored']}
                    items={this.getCounties().map(county => ({
                        content: `${county.name} - ${stateCodes[county.state]}`,
                        icon: (county.favored) ? 'heart' : null
                    }))}
                    selectedTabIndex={this.props.favoredSelected ? 1 : 0}
                    selectedItemIndex={this.getSelectedItemIndex()}
                    onTabClick={this.onTabClick.bind(this)}
                    onItemClick={this.onItemClick.bind(this)}
                    showMax={this.props.showMax}
                    onShowMaxChange={this.props.onShowMaxChange}
                    highlight={_.lowerCase(this.props.searchQuery)}
                    loading={this.props.loading}
                    />
                </div>
            </div>
        )
    }

    onTabClick(index) {
        if(index && this.props.onFavoredCountiesSelected) {
            this.props.onFavoredCountiesSelected()
        } else if(this.props.onAllCountiesSelected) {
            this.props.onAllCountiesSelected()
        }
    }

    onItemClick(index) {
        if(this.props.onCountySelected) {
            this.props.onCountySelected(this.getCounties()[index])
        }
    }

    getSelectedItemIndex() {
        let countyFips = this.props.selectedCounty.fips

        return _.findIndex(this.getCounties(), {fips: countyFips})
    }

    getCounties() {
        let counties = this.props.counties;

        if(this.props.favoredSelected) {
            counties = counties.filter(county => county.favored)
        }

        if(this.props.searchQuery) {
            counties = counties.filter(
                county => _.includes(_.lowerCase(county.name), _.lowerCase(this.props.searchQuery))
            )
        }

        return counties
    }
}

const styles = {
    base: {
        backgroundColor: 'white',
        width: 300
    }
}

export default Radium(Toolbar)
