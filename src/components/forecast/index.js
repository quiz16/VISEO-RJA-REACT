import React from 'react'
import MapImage from 'assets/img/map.png'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faThermometerHalf,
  faTint,
  faMars,
} from '@fortawesome/free-solid-svg-icons'

import './styles.less'


const Forecast = props => {
  return (
    <div className="forecast-wrapper">
      <div className="map-wrapper">
        <img src={MapImage} className="map-img" alt="map-img" />
      </div>
      <div className="overlay">
        <div className="title">
          <span>24-hour Forecast</span>
        </div>
        <div className="ranges">
          <div className="item">
            <div>
              <FontAwesomeIcon
                icon={faThermometerHalf}
              />
              <span className="label">Temp</span>
            </div>
            <span>24-33°C</span>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon
                icon={faTint}
              />
              <span className="label">Humidity</span>
            </div>
            <span>65-95%</span>
          </div>
          <div className="item">
            <div>
              <FontAwesomeIcon
                icon={faMars}
                rotation={180}
              />
              <span className="label">Wind</span>
            </div>
            <span>10-20km/h</span>
          </div>
        </div>
        <div className="clouds">
          <div>
            <FontAwesomeIcon
              icon={faCloud}
            />
          </div>
          <div className="center">
            <FontAwesomeIcon
              icon={faCloud}
            />
            <FontAwesomeIcon
              icon={faCloud}
            />
            <FontAwesomeIcon
              icon={faCloud}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCloud}
            />
          </div>
        </div>
        <div className="parts-day">
          <hr className="line" />
          <div className="active part">
            <span>Morning</span>
          </div>
          <div className="part">
            <span>Afternoon</span>
          </div>
          <div className="part">
            <span>Night</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forecast
