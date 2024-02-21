import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import img from '../assets/img/app_store_google_play.png'


export default function MyFooter() {
  return (
    <>
    {/* footer di MOD pizza che ho dovuto cambiare per adattarlo al sito di Ted Blog (è sotto) */}
        {/* <footer className='container text-uppercase mt-4 py-5 border-top'>
            <Row>
                <Col md={5} className='d-flex lh-lg'>
                    <div className='d-flex flex-column '>
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
                <Col md={4}>
                    <div className='d-flex'>
                        <p className='mb-0'>get the mod</p>
                        <p className='ms-2 mb-0'>rewards app</p>  
                    </div>
                    
                    <img src={img} alt="" width={140} height={90} />
                </Col>
                <Col md={2}>
                <p className='mb-1'>follow us</p>
                <div className='d-flex fs-3 text-danger'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter mx-3"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-between mt-4'>
                <p>© 2024 MOD super fast pizza, LLC.</p>
                <Link>privacy</Link>
                <Link>terms of use</Link>
                <Link>multi-state privacy rights</Link>
                <Link><i className="bi bi-toggle-on"></i>your privacy choices</Link>
            </div>
        </footer> */}

        <footer className='footer d-flex justify-content-between align-items-center'>
            <div className='d-flex text-capitalize'>
                <a href="" className='text-decoration-none'>TED talks usage policy</a>
                <a href="" className='text-decoration-none mx-3'>privacy policy</a>
                <a href="" className='text-decoration-none'>advertising / partnership</a>
                <a href="" className='text-decoration-none mx-3'>TED.com terms of usage</a>
                <a href="" className='text-decoration-none'>contact</a>
                <a href="" className='text-decoration-none mx-3'>jobs</a>
                <a href="" className='text-decoration-none'>press</a>
                <a href="" className='text-decoration-none mx-3'>help</a>
            </div>
            <div>
                <p className='mb-0'>© TED conferance, LLC</p>
            </div>
        </footer>
    </>
  )
}
