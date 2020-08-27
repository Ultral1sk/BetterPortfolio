import React from 'react';
import { Link }            from 'react-router-dom';

const Navbar = props => {

  // const [state, setstate] = useState(false);

  // const hoverOutHandler = () => {
  //   // updating the state from the childrens component  
  //   props.mouseOut(state);
  //   setstate(state);
  // };

  const desktopNavbar = () => (

      <nav className="link_wrapper" >
        <Link  to="/" className="hey_link" >
          <span className="keyword">{props.state ? 'HELLO ' : 'HOVER '}</span>
        </Link>
        <Link to="/" className={ props.state ? `home_link home-movement-class` : `home_link` }>
          <span>Home</span>
        </Link>
        <Link to="/about" className={ props.state ? `about_link about-movement-class` : `about_link` }>
          <span>About</span>
        </Link>
    
        <Link to="/projects" className={ props.state ? `project_link project-movement-class` : `project_link` }>
        <span>Projects</span>
        </Link>
        <Link to="/contact" className={ props.state ? `contact_link contact-movement-class` : `contact_link` }>
          <span>Contact</span>
        </Link>
      </nav>
  

  );

    const mobileNavbar = () => (
        <nav className="d-flex flex-wrap justify-content-center">
          <Link to="/" className="home_link_mobile link-styling">
            <span>Home</span>
          </Link>
          <Link to="/about" className="about_link_mobile link-styling">
            <span>About</span>
          </Link>

          <Link to="/projects" className="project_link_mobile link-styling">
          <span>Projects</span>
          </Link>
          <Link to="/contact" className="contact_link_mobile link-styling" >
            <span>Contact</span>
          </Link>
        </nav>
  );


  return (
    <>

        <div className="d-none d-lg-block">{desktopNavbar()}</div>
        <div className="d-block d-lg-none d-xl-none">{mobileNavbar()}</div>

    </>
  )
}

export default Navbar
