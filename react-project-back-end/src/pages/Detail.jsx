import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import DetailPost from '../components/DetailPost'
import { Container } from 'react-bootstrap'

export default function Detail() {
  return (
    <>
        <MyNavbar />
          <Container>
            <DetailPost />
          </Container>
        <MyFooter />
    </>
  )
}
