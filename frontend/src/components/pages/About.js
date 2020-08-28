import React, { useState } from 'react'
import leftSign            from '../../assets/images/waypoint/signLeft.png'
import rightSign           from '../../assets/images/waypoint/signRight.png'
import arrowLeft           from '../../assets/images/waypoint/arrowLeft.png'
import arrowRight          from '../../assets/images/waypoint/arrowRight.png'
import HTML                from '../../assets/images/logos/html.png'
import CSS                 from '../../assets/images/logos/css.png'
import Bootstrap           from '../../assets/images/logos/bootstrap.png'
import JavaScript          from '../../assets/images/logos/js.png'
import react               from '../../assets/images/logos/react.png'
import redux               from '../../assets/images/logos/redux.png'
import nodejs              from '../../assets/images/logos/node.png'
import express             from '../../assets/images/logos/express.png'
import modifiedJoker       from '../../assets/images/linkImages/modifiedJoker.png'
import Spin                from 'react-reveal/Spin'
import Zoom                from 'react-reveal/Zoom'


import { Link }            from 'react-router-dom'

const About = () => {

  const [state, setstate] = useState([
      {image : HTML, name : 'HTML' },
      {image : CSS , name : 'CSS'},
      {image : Bootstrap , name : 'Bootstrap'},
      {image : JavaScript , name : 'JavaScript'},
      {image : react , name : 'react'},
      {image : redux , name : 'redux'},
      {image : nodejs , name : 'nodejs'},
      {image : express , name : 'express'},
  ])

  const logos = state.map((logo, key ) => {
     return <img className="logo-styling" key={key} src={logo.image} alt={logo.name}/>
  })

  return (

    /* container controllers */
      <div className="container-fluid h-100  d-flex flex-wrap justify-content-center">
        <div className=" w-100 d-flex align-items-center justify-content-center flex-wrap">
        
        {/* left Sign */}
        <div className="col-5 col-lg-2 col-lg-2 order-0 d-flex justify-content-center align-items-end  left_sign_wrapper">
            <img className="d-none d-lg-block left_sign" src={leftSign} alt="left_sign" />

            {/* mobile version sign */}
            <Link className="sign_link-left d-none d-lg-block" to="/">
                Home
              </Link>

            {/* desktop version sign */}
            <Link to="/" className="d-block d-lg-none">
            <img className="left_arrow_sign" src={arrowLeft} alt="left_sign" />
            </Link>
        </div>

        {/* LEFT Scroll */}
        <Spin duration={200} count={3}> 
            <div className="d-flex justify-content-center col-12 col-lg-4 order-4 order-lg-2 left_side">
              <Zoom clear duration={1500}>

                <div className="d-flex flex-column justify-content-center align-items-center flex-wrap left_scroll">
                  <div className="left-scroll-styles">
                      <h2>About</h2>
                      <hr className="mt-0 mb-0" />
                        <div className="left_scroll_content">
                          Hi my name is 
                          <span className="keyword"> Jovan</span>. 
                          i am a 
                          <span className="keyword"> Husband</span>,    
                          <span className="keyword"> Developer</span>,
                          <span className="keyword"> Teacher</span>,
                          <span className="keyword"> Gamer</span>,
                          with a big sense of humor. interested in 
                          <span className="keyword"> frontend </span> and 
                          <span className="keyword"> backend </span>  development. 
                          Always eager to 
                          <span className="keyword"> learn </span> and 
                          <span className="keyword"> work </span> on abitious projects with 
                          <span className="keyword"> positive </span> people.
                        </div>
                  </div>  
                </div>

              </Zoom>
            </div>
        </Spin>

        {/* RIGHT Scroll */}
          <Spin delay={700} duration={200} count={3} >
            <div className="d-flex justify-content-center col-12 col-lg-4 order-3 right_side">
              <Zoom delay={700}  clear duration={1500}>

                <div className="d-flex w-100 flex-column justify-content-center align-items-center  right_scroll">
                  <div className="right-scroll-styles">
                  <h2>Wanted</h2>
                      <hr className="mt-0 mb-0" />
                    <p className="mb-0">Armed and Dangerous</p>
                    <p className="m-0">WANTED FOR HEAVY USAGE OF THE <br /> FOLLOWING WEAPONGS</p>
                    <div>
                      {logos}
                    </div>
                    <div>
                      <img className="modifiedAvatar" src={modifiedJoker} alt="modifiedAvatar" />
                    </div>
                  </div>
                </div>

              </Zoom>
            </div>
          </Spin>

 
        {/* right Sign */}

          <div className="col-5 col-lg-2 order-1 order-lg-4 d-flex justify-content-center align-items-end right_sign_wrapper">
            <img className="d-none d-lg-block right_sign" src={rightSign} alt="right_sign" />

            {/* mobile version sign */}
              <Link className="sign_link-right d-none d-lg-inline-block" to="/projects">
                Projects
              </Link>
              
            {/* desktop version sign */}
              <Link to="/projects" className="d-block d-lg-none">
                <img  className="right_arrow_sign" src={arrowRight} alt=" right_sign" />
              </Link>
          </div>

        </div>
      </div>

  )
}

export default About
