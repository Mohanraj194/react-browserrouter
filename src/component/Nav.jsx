import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
          <Navbar bg="light" expand="lg">
              <Link to="/"><Navbar.Brand >Home</Navbar.Brand></Link>
              
          </Navbar>
     );
}
 
export default Header;
