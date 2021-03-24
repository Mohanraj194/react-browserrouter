import React, { Component } from 'react';
import {Container,Row,Card,Button} from 'react-bootstrap';
import axios from 'axios'


class User extends Component {
  constructor(props){
    super(props)
    this.state={
        id:props.match.params.id,
        user:{},
        address:{}            
    }
    
  }
  getData= async()=>{
    let {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
    this.setState({user : data})
    this.setState({address : data.address})
    console.log(this.state.user.address.city)
  }
  componentDidMount = () => this.getData()
  render() { 
    return (
      <Container className="my-2">
        <Button variant="warning" onClick={()=>this.props.history.goBack()}  >Go Back</Button>
        <Row>
          
        <Card className='m-auto'>
        <Card.Header as="h5">Name : {this.state.user.name}</Card.Header>
        <Card.Body>
            <Card.Title>UserName: {this.state.user.username} Email: {this.state.user.email} </Card.Title>
            <Card.Text>
              <b>City:</b> {this.state.address.city}<br/>
              <b>Street:</b> {this.state.address.street}<br/>
              <b>Zipcode:</b> {this.state.address.zipcode}
           
              
            </Card.Text>
            
        </Card.Body>
        </Card>
        </Row> 
      </Container>
      );
  }
}
 
export default User;
