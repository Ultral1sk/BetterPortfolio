import React, { useState } from 'react';
import { Link }            from 'react-router-dom';
import Navbar              from '../Navbar';
import signtRight          from "../../assets/images/waypoint/signRight.png";
import avatar              from '../../assets/images/linkImages/avatar.png';
import Tada                from 'react-reveal/Tada';

const Home = () => {

  const [state, setstate] = useState(false);

  
  const hoverHandler    = () => setstate(true);
  // the paramter is being updated from the children component
  const hoverOutHandler = () => setstate(false);
  
  return (
    <div className="d-flex d-lg-block flex-column flex-lg-row h-100 justify-content-evenly align-items-end" >
  
      {/* Top left corner CONTENT */}

        <div className="col  my_content_wrapper text-white mobile-text-shadow">
          <span>Hello, my name is </span><br />
          <h2 className=" keyword">Jovan Derebanoski.<br /></h2>
          <span>I'm a </span> 
          <span className="keyword"> Developer </span> 
          Based in 
          <span className="keyword"> Germany </span>  <br />
          <span>and I build things on the Internet</span>
        </div>


      {/* Navbar/ Image / Sign Controller */}

        <div className="d-flex justify-content-between align-items-end" style={{height: '70%'}}>
          <div className="navbar_avatar_wrapper" onMouseOver={hoverHandler} onMouseLeave={hoverOutHandler} >
            <Navbar  state={state}/>
              <Tada>
                <img className="col col-lg-6 avatar" src={avatar} alt="avatar"  />
              </Tada>
          </div>
          <div className="d-none d-lg-block about_waypoint_wrapper">
            <img className="about_waypoint_img" src={signtRight} alt="aboutpage"  />
              <Link to="about">
                About
              </Link>
          </div>
        </div>
   
   
    </div>
  )
}

export default Home
