// import React, { useEffect } from 'react'
// import { url } from '../config/config'
// import { useState } from 'react'
// import { Card, Button } from 'react-bootstrap'
 
// export default function Posts() {

//     const [post, setPost] = useState([]);

//     useEffect(() => {
//         fetch(url + 'posts')
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 setPost(json)
//             })
//             .catch(err => console.log(err))
//     }, [])

//   return (
//     <>
//         {post &&
//             post.map((post, index) => (
//                     <Card key={index} style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={post.featured_image_src} />
//                     <Card.Body>
//                     <Card.Title>{post.title}</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                 </Card>
//         ))}
//     </>
//   )
// }

import React, { useEffect, useState } from "react";
import { url } from "../config/config";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MyPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url + "posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center justify-items-start">
      {posts.map((post) => (
        <Card key={post.id} className="col-lg-3 col-md-5 col-sm-12 mx-lg-3 mx-md-2 mx-sm-1 my-1">
          <Card.Img variant="top" src={post.featured_media} />
          <Card.Body>
            <Card.Title>{post.title.rendered}</Card.Title>
            <Card.Text>
                <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
