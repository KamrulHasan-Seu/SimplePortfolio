import React from 'react'
import {Card} from 'react-bootstrap'
const Project = (props) => {
  return (
    <div className={props.className}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="images/logo.svg"/>
  <hr/>
  <Card.Body>
    <Card.Title >{props.name}</Card.Title>
    <Card.Text>
      {props.details}
    </Card.Text>
    <hr/>
    <Card.Link href="#">View Demo</Card.Link>
    <Card.Link href={props.giturl}>Github</Card.Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default Project
