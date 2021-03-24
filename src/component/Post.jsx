import React, { Component } from 'react';
import {Container,Row,Card,Button} from 'react-bootstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Post extends Component {
  constructor(props){
    super(props)
    this.state={
        id:props.match.params.id,
        record:[]            
    }
    
  }
  getData= async()=>{
    let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
    this.setState({record:data})
    //console.log(this.state.record)
   // console.log(this.props)
  }
  componentDidMount = () => this.getData()
  render() { 
    return (
      <Container className="my-2">
        <Button variant="success" onClick={()=>this.props.history.goForward()}  >Go Forward</Button>
        <Row className="mt-2">
        <Card>
        <Card.Header as="h5">Post Id : {this.state.record.id}</Card.Header>
        <Card.Body>
            <Card.Title>{this.state.record.title}</Card.Title>
            <Card.Text>
            {this.state.record.body}
            </Card.Text>
            <Link to={`/user/${this.state.record.userId}`} className="hvr-bounce-in"><i className="fa fa-user-circle fa-lg " aria-hidden="true"></i></Link>
            <Link to={`/comment/${this.state.record.id}`} className="hvr-bounce-in"><i className="fa fa-commenting fa-lg pl-2" aria-hidden="true"></i></Link>
            
        </Card.Body>
        </Card>
        </Row>
      </Container>
      );
  }
}
 
export default Post;
