import React from 'react'
import {Col} from 'antd'
import './styles.less'


const Gauge = props => {
  return (
    <div className="gauge-wrapper">
      <div className="item-wrapper">
        <span className="title">PSI</span>
        <span className="psi-value">37</span>
        <span className="status">Good</span>
      </div>
      <div className="item-wrapper">
        <span className="title">RAIN</span>
        <span className="value">0</span>
        <span className="status">mm</span>
      </div>
      <div className="item-wrapper">
        <span className="title">DENGUE</span>
        <span className="dengue-value"></span>
        <span className="status">mm</span>
      </div>
      <div className="more-wrapper">
        <div className="add">
          <span className="add-icon">+</span>
        </div>
        <span>Add</span>
      </div>
    </div>
  )
}

export default Gauge
