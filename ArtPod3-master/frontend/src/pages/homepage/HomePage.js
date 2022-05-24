import './HomePageStyle.css'
import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header>
        <Container as="section" className="header-div" fluid>
          <div className="header-items">
            <div className='text-div'>
              <h1 className="header-text">Come Search Our Collection!</h1>
            </div>
            {/* <Link to="/signup"><Button variant="outline-light" size="lg" className="header-btn">Signup</Button></Link> */}
          </div>
        </Container>
      </header>
    </div>
  )
}

export default HomePage;
