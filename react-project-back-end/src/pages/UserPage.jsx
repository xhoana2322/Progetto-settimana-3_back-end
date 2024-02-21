import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import Users from '../components/Users'
import { Container } from 'react-bootstrap'

export default function UsersPage() {
  return (
    <>
        <MyNavbar />
        <Container style={{ minHeight: '100vh' }}>
          <Users />
        </Container>
        <MyFooter />
    </>
  )
}
