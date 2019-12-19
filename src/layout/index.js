import React from 'react'
import {
  Layout,
  Drawer,
  Menu,
  Icon,
  Spin,
} from 'antd'

import HeaderComponent from 'components/header'

import './styles.less'

const {Header, Content} = Layout


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
    const [collapsed, setCollapsed] = React.useState(false)

    const setSpin = val => setTest(val)

    const layoutC = test ? 'spinner-container' : ''

    const toggle = () => setCollapsed(!collapsed)

    return (
      <Layout>
        <Drawer
          className="layout-drawer"
          placement="left"
          closable={false}
          visible={collapsed}
          getContainer={false}
          onClose={toggle}
          style={{position: 'absolute'}}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Drawer>
        <Layout>
          <Header className="layout-header">
            <HeaderComponent toggle={toggle}/>
          </Header>
          <Content className="layout-content">
            <React.Suspense fallback={<Fallback setSpin={setSpin} />}>
              <BaseComponent {...props} />
            </React.Suspense>
          </Content>
        </Layout>
      </Layout>
    )
  }
  return LayoutWrapper
}

export default AppLayout
