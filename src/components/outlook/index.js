import React from 'react'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faThermometerHalf,
  faMars,
} from '@fortawesome/free-solid-svg-icons'
import './styles.less'

const Item = props => {

  const {data} = props

  return (
    <div className="item-wrapper">
      <div className="day">
        <span className="label">{data.day}</span>
        <FontAwesomeIcon
          icon={faCloud}
          className="icon"
        />
      </div>
      <div className="details">
        <div className="label">
          <span>{data.label}</span>
        </div>
        <div className="measures">
          <div className="temperature-wrapper">
            <FontAwesomeIcon
              icon={faThermometerHalf}
              color="#63BADF"
            />
            <span className="label">{`${data.temperature}°C`}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMars}
              rotation={180}
              color="#63BADF"
            />
            <span className="label">{`${data.wind}km/h`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Outlook = props => {
  const data = [
    {
      day: 'TUE',
      label: 'Afternoon thundery showers.',
      temperature: '24-34',
      wind: '10-25',
    },
    {
      day: 'WED',
      label: 'Afternoon thundery showers.',
      temperature: '24-34',
      wind: '10-25',
    },
    {
      day: 'THU',
      label: 'Afternoon thundery showers.',
      temperature: '24-34',
      wind: '10-20',
    },
    {
      day: 'FRI',
      label: 'Afternoon thundery showers.',
      temperature: '24-34',
      wind: '10-25',
    },
  ]

  const item = data.map((item, index) => {
    if (index !== data.length) {
      return (
        <>
          <Item data={item}/>
          <hr className="line" />
        </>
      )
    }
    return <Item data={item}/>
  })

  return (
    <div className="outlook-wrapper">
      <div className="title">
        <span>4-day Outlook</span>
      </div>
      {item}
    </div>
  )
}

export default Outlook
