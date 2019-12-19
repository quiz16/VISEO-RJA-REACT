import React from 'react'
import {Col} from 'antd'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBell,
  faBroadcastTower,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
import './styles.less'


const Header = props => {
  return (
    <div className="header-wrapper">
      <Col span={8}>
        <div className="header-left">
          <FontAwesomeIcon
            icon={faBars}
            color="#D9E2EF"
            onClick={props.toggle}
          />
        </div>
      </Col>
      <Col span={8}>
        <div className="header-center">
          <span className="header-title">myENV</span>
          <span className="header-selection">Current Location
            <span className="down-icon-wrapper">
              <FontAwesomeIcon
                icon={faAngleDown}
                color="#D9E2EF"
              />
            </span>
          </span>
        </div>
      </Col>
      <Col span={8}>
        <div className="header-right">
          <FontAwesomeIcon
            className="broadcast-icon"
            icon={faBroadcastTower}
            color="#FFFFFF"
          />
          <FontAwesomeIcon
            icon={faBell}
            color="#FFFFFF"
          />
        </div>
      </Col>
    </div>
  )
}

export default Header
