import React from 'react'
import {
  Layout,
  Icon,
  Spin,
} from 'antd'

import './styles.less'

const {Header, Footer, Content} = Layout


const Fallback = props => {
  React.useEffect(() => {
    return () => props.setSpin(false)
  }, [props])
  props.setSpin(true)
  return (
    <div className="spinner-wrapper">
      <Spin
        indicator={<Icon type="loading" className="spin-icon" spin />}
      />
    </div>
  )
}

const AppLayout = BaseComponent => {
  const LayoutWrapper = props => {
    const {match: {path}} = props
    const [test, setTest] = React.useState(false)

    const setSpin = val => setTest(val)

    const layoutC = test ? 'spinner-container' : ''

    console.log(layoutC)
    return (
      <Layout>
        <Header className="layout-header">
          <div>HEADER Component</div>
        </Header>
        <Content className="layout-content">
          <React.Suspense fallback={<Fallback setSpin={setSpin} />}>
            <BaseComponent {...props} />
          </React.Suspense>
        </Content>
        <Footer>
          <div>HEADER Component</div>
        </Footer>
      </Layout>
    )
  }
  return LayoutWrapper
}

export default AppLayout
