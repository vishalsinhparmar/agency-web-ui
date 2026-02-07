import './responsive.css'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <>
 
     <nav className=" navbar navbar-expand-lg  " >
  <div className="  container-fluid px-5 text-dark bg-light mx-auto py-3 w-100 shadow mt-0 " >
    <Link to="/" className="navbar-brand fw-bold" href="#">
      Digital Agency
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav  ">
        <li  className=" nav-item mx-2 ">
      <Link to="/home" className="nav-link Hover" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/services" className="nav-link  Hover" href="#">
            Services
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/testimonial" className="nav-link  Hover" href="#">
            Testimonial
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/team" className="nav-link  Hover" href="#">
            Team
          </Link>
        </li>
        <li className="nav-item mx-2 me-5 mb-2 ">
          <Link to="/contact-us" className="nav-link  Hover" href="#">
            Contact-Us
          </Link>
        </li>
        <button className='btn btn-danger  p-0 px-2 rounded-pill  m-0'><li className="nav-item  ">
          <Link to="/signin" className="nav-link link-light " href="#">
          Log In
          </Link>
        </li></button>
        <li className="nav-item  px-2">
          <Link to="/signup" className="nav-link link-danger" href="#">
          Sign-Up
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
