import React, { useContext } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'
import { Ingresar } from './Ingresar'
import { Cola } from './Cola'
import { CrearTicket } from './CrearTicket'
import { Escritorio } from './Escritorio'
import { UiContext } from '../context/UiContext'
const { Sider, Content } = Layout

export const RouterPage = () => {
  const { ocultarMenu } = useContext(UiContext)
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider collapsedWidth={0} breakpoint="md" hidden={ocultarMenu}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola de Tickets</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to="/crear">Crear Tickets</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear" element={<CrearTicket />} />
              <Route path="/escritorio" element={<Escritorio />} />
              <Route path="*" element={<Navigate to="/ingresar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
