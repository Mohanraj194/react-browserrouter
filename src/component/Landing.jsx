import React, { Component } from 'react';
import {Container,Row} from 'react-bootstrap';
import axios from 'axios'
import TableRecord from './Table';
class App extends Component {
  constructor(){
    super()
    this.state={
        tableRow:[]            
    }
  }
  getData= async()=>{
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.setState({tableRow:data})
  }
   componentDidMount = () => this.getData()
  render() { 
    return (
      <Container className="mt-3">
        <Row>
            <TableRecord 
            rows={this.state.tableRow}
            />
        </Row>
      </Container>
      );
  }
}
 
export default App;
