import { Row, Col } from "react-bootstrap"
import './NavBarsStyle.css'

function Footer() {
  return (
    <footer className="text-center text-lg-start 
    bg-white text-muted mt-4">
    <div className="text-center p-4">
      © Copyright - 2022 ArtPod <a 
        target="_blank" 
        className="text-reset fw-bold text-decoration-none" 
        href="https://linkedin.com/in/amy-thomas531"
      >
        Amy Thomas
      </a> 
    </div>
    </footer>
  )
}

export default Footer;

