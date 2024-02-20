import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../config/config'
import Card from 'react-bootstrap/Card';

export default function DetailPost() {

    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(url + 'posts/' + id)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setDetail(data)
            })
            .catch(err => console.error(err))
    }, [id])

  return (
    <>
    {detail.title && detail._embedded['wp:featuredmedia'] && (
      <Card className='mx-auto my-5 border-0' style={{ width: '60rem' }}>
        {detail._embedded && detail._embedded['wp:featuredmedia'] && (
          <Card.Img variant="top" src={detail._embedded["wp:featuredmedia"][0].source_url} />
        )}
        <Card.Body>
          <Card.Title>{detail.title && detail.title.rendered}</Card.Title>
          <Card.Text>
          <span
                    dangerouslySetInnerHTML={{ __html: detail.excerpt.rendered}}
                  />
          </Card.Text>
          <Card.Text>
            Date: {detail.date.slice(0, -9)}
            <br />
            Author: {detail.author}
          </Card.Text>
        </Card.Body>
      </Card>
    )}
      
    </>
  )
}
