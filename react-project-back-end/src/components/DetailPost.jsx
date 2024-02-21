import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../config/config'
import Card from 'react-bootstrap/Card';

export default function DetailPost() {

    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(url + `posts/${id}?_embed`)
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
        <div className="tag">
        </div>

        {detail._embedded && detail._embedded['wp:featuredmedia'] && (
          <Card.Img variant="top" src={detail._embedded["wp:featuredmedia"][0].source_url} />
        )}
        <p className='fw-semibold mt-3'> Tags: &nbsp; 
          {detail._embedded['wp:term'][1].map((tag) => (
            <span key={tag.id} className="tag-item">
              {tag.name} | &nbsp;
            </span>
          ))}
        </p>      
        <Card.Body>
          <Card.Text>
            <h1><span dangerouslySetInnerHTML={{ __html: detail.title.rendered }} /></h1>
            <div>
              <span dangerouslySetInnerHTML={{ __html: detail.content.rendered }} />
            </div>
            <div>

            </div>
            
          </Card.Text> 
        </Card.Body>
      </Card>
    )}
      
    </>
  )
}
