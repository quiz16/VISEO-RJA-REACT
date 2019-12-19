import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from 'layout'

const Home = React.lazy(() => import('containers/home'))

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Layout(Home)} />
    </Switch>
  </BrowserRouter>
)
