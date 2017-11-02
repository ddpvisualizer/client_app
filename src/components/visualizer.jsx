import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import StatsChart from './visualizer-core/stats-chart.jsx'
import Loader from './common-core/loader.jsx'

class Visualizer extends React.Component {

    static propTypes = {
        loading: PropTypes.bool,
        onHeartClick: PropTypes.func,
        name: PropTypes.string,
        state: PropTypes.string,
        fips: PropTypes.string,
        favored: PropTypes.bool,
        metrics: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            years: PropTypes.arrayOf(PropTypes.shape({
                ageAjustedUpperConfidenceLimit: PropTypes.string,
                ageAjustedLowerConfidenceLimit: PropTypes.string,
                ageAjustedPercent: PropTypes.string,
                upperConfidenceLimit: PropTypes.string,
                lowerConfidenceLimit: PropTypes.string,
                percent: PropTypes.string,
                number: PropTypes.string
            }))
        }))
    }

    static defaultProps = {
        loading: false,
        name: '',
        state: '',
        fips: '',
        favored: false,
        metrics: []
    }

    render() {
        return (this.props.loading) ? (
            <div style={styles.nothing}>
                <Loader />
            </div>
        ): this.renderCounty()
    }

    renderCounty() {
        return (this.props.name) ? (
            <div style={styles.visualizer}>
                <div
                    style={[styles.heartContainer, (this.props.favored ? styles.heartColored : null)]}
                    onClick={this.props.onHeartClick} >
                    <FontAwesome
                        name={`heart${this.props.favored ? '' : '-o'}`}
                        style={styles.heart} />
                </div>
                <h2>{this.props.name}</h2>
                <div>{this.props.state} - FIPS {this.props.fips}</div>
                <div>
                    {this.props.metrics.map(this.renderMetric.bind(this))}
                </div>
            </div>
        ) : this.renderNothing()
    }

    renderNothing() {
        return (
            <div style={styles.nothing}>
                Nothing selected
            </div>
        )
    }

    renderMetric(metric, index) {
        return (
            <div style={styles.metricContainer} key={index}>
                <h4>{metric.name}</h4>
                <div style={styles.statsContainer}>
                    <StatsChart key={index} strokes={this.getStokes(metric.years)}/>
                </div>
                <div style={styles.statsContainer}>
                    <StatsChart key={index} strokes={this.getStokes(metric.years, true)}/>
                </div>
            </div>
        )
    }

    getStokes(years, number) {
        let colors = {
            ageAjustedLowerConfidenceLimit: 'rgba(20, 150, 20, 0.6)',
            ageAjustedUpperConfidenceLimit: 'rgba(20, 150, 20, 0.6)',
            ageAjustedPercent: 'rgba(20, 200, 200, 0.6)',
            upperConfidenceLimit: 'rgba(150, 20, 20, 0.6)',
            lowerConfidenceLimit: 'rgba(150, 20, 20, 0.6)',
            percent: 'rgba(20, 20, 150, 0.6)'
        }

        if(number) {
            colors = {
                number: 'rgba(20, 20, 150, 0.6)'
            }
        }

        return Object.keys(colors).map(key => ({
            name: key,
            color: colors[key],
            values: years.map(year => Number(year[key]))
        }))
    }

}

const styles = {
    visualizer: {
        textAlign: 'center'
    },
    nothing: {
        textAlign: 'center',
        marginTop: 150
    },
    heartContainer: {
        color: 'grey',
        ':hover': {
            color: '#DC143C'
        }
    },
    heart: {
        float: 'right',
        marginRight: 10,
        fontSize: 30,
    },
    heartColored: {
        color: '#DC143C',
        ':hover': {
            color: 'grey'
        }
    },
    statsContainer: {
        display: 'inline-block',
        marginRight: 40,
        width: 550
    }
}

export default Radium(Visualizer)
