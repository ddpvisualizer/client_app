import React from 'react'
import {Line} from 'react-chartjs-2'
import PropTypes from 'prop-types'

class StatsChart extends React.Component {

    static propTypes = {
        strokes: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string,
            values: PropTypes.arrayOf(PropTypes.number)
        }))
    }

    render() {
        return (
            <div>
                <Line data={this.getChartData()} options={this.getChartOptions()} />
            </div>
        )
    }

    getChartData() {
        let color = {
            'CLOSE': 'rgba(150, 20, 20, 0.6)',
            'CREATE_TICKET': 'rgba(20, 150, 20, 0.6)',
            'SIGNUP': 'rgba(20, 20, 150, 0.6)',
            'COMMENT': 'rgba(20, 200, 200, 0.6)',
            'ASSIGN': 'rgba(20, 150, 20, 0.6)'
        };

        let strokes = this.props.strokes.slice();
        let datasets = strokes.map((stroke, index) => {
            return {
                label: stroke.name,
                data: stroke.values,
                fill: false,
                borderWidth: 2,
                borderColor: stroke.color,
                pointBorderColor: stroke.color,
                pointRadius: 0,
                pointHoverRadius: 3,
                lineTension: 0.2,
                pointHoverBackgroundColor: stroke.color,
                hitRadius: 30
            }
        });

        return {
            labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2012', '2013'],
            datasets: datasets
        };
    }

    getChartOptions() {
        return {
            legend: {
                display: true,
                position: 'bottom'
            },
            layout: {
                padding: {
                    left: 5,
                }
            }
        }
    }
}

export default StatsChart
