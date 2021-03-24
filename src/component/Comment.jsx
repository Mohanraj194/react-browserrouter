import React, { Component } from 'react';
import {Container,Row,Card,Col,Button} from 'react-bootstrap';
import axios from 'axios';

class Comment extends Component {
    constructor(props){
        super(props)
            this.state={
                id:+props.match.params.id,
                comment:[]
            }
        
    }
    async componentDidMount(){
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/comments/')
        let comment = data.filter(element=>element.postId===this.state.id)
        this.setState({comment})
        
    }
    render() { 
        return (
        <Container className="my-2">
            <Button variant="warning" onClick={()=>this.props.history.goBack()}  >Go Back</Button>
        <Row>
          
            {this.state.comment.map(comment=>(
                <Col  md={4} key={comment.id}>
                <Card className='my-1'>
                <Card.Header as="h5">Name: {comment.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Email: {comment.email} </Card.Title>
                    <Card.Text>
                     {comment.body}
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
      </Container>
        ) ;
    }
}
 
export default Comment;