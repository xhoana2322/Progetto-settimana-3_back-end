


import React, { useEffect, useState } from "react";
import { url } from "../config/config";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


export default function MyPost() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url + "posts?_embed")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form.Group className="mb-3 mt-4" onSubmit={handleSearch}>
        <Form.Control type="text"
              placeholder="Search posts"
              className=" mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
      </Form.Group>

      <div className="d-flex flex-wrap justify-content-center justify-items-start">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="col-lg-3 col-md-5 col-sm-12 mx-lg-1 mx-md-2 mx-sm-1 my-1"
              style={{ height: "26rem", width: "22rem" }}
            >
              {/* {post._embedded && post._embedded['wp:featuredmedia'] && (
              <Card.Img variant="top" src={post._embedded['wp:featuredmedia']['0'].source_url} />)} */}
              <Card.Body className="pb-0">
                <Card.Title>
                <span
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </Card.Title>
                <Card.Text>
                  <span
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </Card.Text>
                <div className="d-flex position-absolute bottom-0 w-100">
                  <div className="fs-6 d-flex align-items-center justify-content-between w-100 my-auto text-secondary">
                    <div>
                      {post._embedded.author[0].name}
                      <i className="bi bi-dot mx-0"></i>
                      {post.date.slice(0, -9)}
                    </div>
                    <Button 
                      variant="danger p-1 px-2 my-2 me-4"
                      onClick={() => navigate(`/posts/${post.id}`)}
                      >
                      Read more
                      </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No matching posts found.</p>
        )}
      </div>
    </>
  );
}
