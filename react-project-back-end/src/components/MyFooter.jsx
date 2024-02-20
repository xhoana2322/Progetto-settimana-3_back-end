import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import img from '../assets/img/app_store_google_play.png'


export default function MyFooter() {
  return (
    <>
        <footer className='text-uppercase mt-4'>
            <Row>
                <Col className='d-flex'>
                    <div className='d-flex flex-column'>
                        <Link>allergen info</Link>
                        <Link>nutrition</Link>
                        <Link>faqs</Link>
                        <Link>gift cards</Link>
                        <Link>store directory</Link>
                    </div>
                    <div className='d-flex flex-column ms-3'>
                        <Link>mod news</Link>
                        <Link>press</Link>
                        <Link>franchising</Link>
                        <Link>real estate</Link>
                        <Link>leadership</Link>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex'>
                        <p>get the mod</p>
                        <p className='ms-2'>rewards app</p>  
                    </div>
                    
                    <img src={img} alt="" width={140} height={90} />
                </Col>
                <Col>
                <p>follow us</p>
                <div className='d-flex'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter mx-3"></i>
                    <i class="bi bi-instagram"></i>
                </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-between w-75 mt-4'>
                <p>© 2024 MOD super fast pizza, LLC.</p>
                <Link>privacy</Link>
                <Link>terms of use</Link>
                <Link>multi-state privacy rights</Link>
                <Link><i className="bi bi-toggle-on"></i>your privacy choices</Link>
            </div>
        </footer>
    </>
  )
}
