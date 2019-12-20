import React from 'react'

import TodayCondition from 'components/today-condition'

import './styles.less'

const HomeComponent = props => {
  return (
    <div className="home-wrapper">
      <TodayCondition />
    </div>
  )
}

export default HomeComponent
