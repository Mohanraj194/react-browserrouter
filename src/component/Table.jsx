import {Table} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

const TableRecord = (props) => {
    
    return ( 
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
           {props.rows.map(post=>(
              <tr key={post.id} >
                  
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td><NavLink to={`/post/${post.id}`}>{post.body}</NavLink></td>
                  
              </tr>
          ))} 
        </tbody>
      </Table>
     );
}
 
export default TableRecord;