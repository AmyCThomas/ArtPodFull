import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import NavBar2 from './artSearch/NavBar2';
import './NavBarsStyle.css'
import artlogo from './artlogo2.png';

function NavBar() {
  return (
    <div>
      <Navbar className='navbar' variant="dark">
          <Navbar.Collapse>
          <Container>
           <Navbar.Brand>
           <img src={artlogo} width={150} height={150} alt='Logo' />
            </Navbar.Brand>
            <Nav className="justify-content-center">
            <div className="d-flex flex-row justify-content-between border-bottom">
    {/* <NavLink to="/" activeclassname="active-link "><h1 className="arrow mx-5">{'<'}</h1></NavLink>
    <p className="col-6 mt-3">Enjoy Our Collection</p> */}
  </div>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/artSearch">Art Search</Nav.Link>
              <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
              <Nav.Link as={Link} to="/news">News</Nav.Link>
            </Nav>
          </Container>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar;