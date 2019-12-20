import React from 'react'

import TodayCondition from 'components/today-condition'
import Gauge from 'components/gauge'
import Chart from 'components/chart'

import './styles.less'

const HomeComponent = props => {
  return (
    <div className="home-wrapper">
      <TodayCondition />
      <Gauge />
      <Chart />
    </div>
  )
}

export default HomeComponent
