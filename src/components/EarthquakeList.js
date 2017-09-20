import React, {Component} from 'react'
import moment from 'moment'
import earthquakes from '../data/earthquakes'

class EarthquakeList extends Component {
  render () {
    const quakes = earthquakes.features.map(feature => {
    return (
        <div className="col-sm-6" key={feature.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{feature.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {feature.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(feature.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {feature.geometry.coordinates}</p>

              <a href={feature.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="quake-list">
        <div className="row">
          {quakes}
        </div>
      </div>
    )
  }
}


export default EarthquakeList
