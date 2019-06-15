import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ name, description }) => {
  return (
    <Card
      style={{
        maxWidth: '18rem',
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.6)',
      }}
      className="bg-dark text-light"
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Project
