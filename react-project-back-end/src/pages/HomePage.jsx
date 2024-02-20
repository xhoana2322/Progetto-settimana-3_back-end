import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import Posts from '../components/Posts'
import { Container } from 'react-bootstrap'


export default function HomePage() {
  return (
    <>
        <MyNavbar />
        <Container>
            <Posts />
        </Container>
        <MyFooter />
    </>
  )
}
