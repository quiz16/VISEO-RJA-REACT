import React from 'react'
import {Col} from 'antd'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faThermometerHalf,
  faTint,
} from '@fortawesome/free-solid-svg-icons'
import './styles.less'


const TodayCondition = props => {
  return (
    <div className="today-wrapper">
      <div className="cloud-wrapper">
        <FontAwesomeIcon
          icon={faCloud}
          color="#FCFCFC"
        />
      </div>
      <div className="today-details">
        <span className="weather-name">Partly Cloudy</span>
        <div>
          <FontAwesomeIcon
            icon={faThermometerHalf}
          />
          <span className="temperature">28.8°C</span>
          <FontAwesomeIcon
            icon={faTint}
          />
          <span className="percentage">68%</span>
        </div>
      </div>
    </div>
  )
}

export default TodayCondition
