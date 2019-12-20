import React from 'react'

import TodayCondition from 'components/today-condition'
import Gauge from 'components/gauge'

import './styles.less'

const HomeComponent = props => {
  return (
    <div className="home-wrapper">
      <TodayCondition />
      <Gauge />
    </div>
  )
}

export default HomeComponent
