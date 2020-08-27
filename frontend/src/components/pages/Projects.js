import React, { useState } from 'react'
import { Link }            from 'react-router-dom'

import bottle0             from '../../assets/images/waypoint/bottle1.png'
import bottle1             from '../../assets/images/waypoint/bottle2.png'
import bottle2             from '../../assets/images/waypoint/bottle3.png'
import bottle3             from '../../assets/images/waypoint/bottle4.png'
import bottle4             from '../../assets/images/waypoint/bottle5.png'

import leftSign            from '../../assets/images/waypoint/signLeft.png'
import rightSign           from '../../assets/images/waypoint/signRight.png'
import arrowLeft           from '../../assets/images/waypoint/arrowLeft.png'
import arrowRight          from '../../assets/images/waypoint/arrowRight.png'

import ReusableModal       from '../../utility/ReusableModal'


const ProjectLayout = (  ) => {


  const [data, setdata] = useState(
    [
      { 
        id : 0,
        link : 'https://sport-1b2e0.firebaseapp.com/',
        name : 'Nba Blog',
        description : 'Home Project for practice purposes',
        techonologies : 'HTML, SCSS, JavaScript, React, Firebase',
        image : bottle0,

        class : 'bottleZero'
      },
      { 
        id : 1,
        link : 'https://findyourcountrydev.netlify.app/',
        name : 'Find Your Flag',
        description : 'Home Project for practice purposes',
        techonologies : 'HTML, SCSS, JavaScript, React',
        image : bottle1,

        class : 'bottleOne'
      },
      { 
        id : 2,
        link : 'https://github.com/Ultral1sk/gameShopFrontEnd',
        name : 'Game Shop eCommerce',
        description : 'Full-Stack Web Development Course Final Project',
        techonologies : 'HTML, SCSS, JavaScript, React + Redux, Node.js + Express, MongoDB, Passport.js, Bcrypt, JWT, ',
        image : bottle2,
        class : 'bottleTwo'
      },
    
      { 
        id : 3,
        link : 'https://joweatherapp.netlify.app/',
        name : 'Weather App',
        description : 'School Project, test data fetching from an API',
        techonologies : 'jQuery, external API',
        image : bottle3,

        class : 'bottleThree'
      },
      { 
        id : 4,
        link : 'https://checkoutcardtest.netlify.app/',
        name : 'Checkout Card',
        description : 'Home Project',
        techonologies : 'HTML, SCSS, JavaScript + React + Redux',
        image : bottle4,
        class : 'bottleFour'
      },
    
    ]
    
  )



  //passing sate to modal and rendering 
  const renderModals = data.map(bottles => {
      return  (

        <div className="d-none d-lg-flex col-1" >
 
        <ReusableModal 
  
            key={bottles.id}
            name={bottles.name} 
            description={bottles.description} 
            technologies={bottles.techonologies}
            image={bottles.image}
            link={bottles.link}
            class={bottles.class}
  
            />
      </div>
      )
 
  })

  return (
    <div className="main_project_items_wrapper  d-flex justify-content-between text-center align-items-end  flex-wrap">
      
      <div className="col-5 h-100  col-lg-2 d-flex justify-content-center align-items-end   left_sign_wrapper">
        
        {/* mobile version sign */}
        <img  className="d-none d-lg-block  left_sign" src={leftSign} alt="left_sign" />
        
        <Link className="project_sign_link-left d-none d-lg-block" to="/about">
            about
          </Link>

        {/* desktop version sign */}
        <Link to="/about" className="d-block d-lg-none">
        <img className="left_arrow_sign" src={arrowLeft} alt="left_sign" />
        </Link>
      
      </div>

      <div>
        <h2 className="startingTitle">Some of Jovan's <span className="keyword">Projects</span></h2>
      </div>
    
      {/* modal rendering bottles images   */}
          {renderModals}
     
      {/* modal rendering bottles images   */}
 
      <div className="col-5 col-lg-2 order-1 order-lg-5 d-flex justify-content-center align-items-end right_sign_wrapper">
             
          {/* mobile version sign */}
          <img className="d-none d-lg-block right_sign" src={rightSign} alt="right_sign" />

          <Link  className="project_sign_link-right d-none d-lg-inline-block" to="/contact">
                contact
          </Link>    

        {/* desktop version sign */}
          <Link to="/contact" className="d-block d-lg-none">
            <img  className="right_arrow_sign" src={arrowRight} alt=" right_sign" />
          </Link>
      
      </div>

        {/* Carousel mobile version modal */}

        <div className="col-12 order-3 d-block d-lg-none">
            {projectBottleCarousel(data)}
        </div>

        {/* Carousel mobile version modal */}

      <div >
     
      </div>
   
    </div>
  )
}




















































const projectBottleCarousel = (props = []) => {

  
  return (<div >
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active col">
          <ReusableModal  key={props[0].id}
            name={props[0].name} 
            description={props[0].description} 
            technologies={props[0].techonologies}
            image={props[0].image}
            link={props[0].link}
            class={props[0].class}/>
        </div>
        <div className="carousel-item">
          <ReusableModal  key={props[1].id}
            name={props[1].name} 
            description={props[1].description} 
            technologies={props[1].techonologies}
            image={props[1].image}
            link={props[1].link}
            class={props[1].class}

            />        
          </div>
        <div className="carousel-item">
        <ReusableModal  key={props[2].id}
            name={props[2].name} 
            description={props[2].description} 
            technologies={props[2].techonologies}
            image={props[2].image}
            link={props[2].link}
            class={props[2].class}

            />        
      
        </div>
        <div className="carousel-item">
        <ReusableModal  key={props[3].id}
            name={props[3].name} 
            description={props[3].description} 
            technologies={props[3].techonologies}
            image={props[3].image}
            link={props[3].link}
            class={props[3].class}

            />        

        </div>
        <div className="carousel-item">
        <ReusableModal  key={props[4].id}
            name={props[4].name} 
            description={props[4].description} 
            technologies={props[4].techonologies}
            image={props[4].image}
            link={props[4].link}
            class={props[4].class}

            />        

        </div> 
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  )
}













export default ProjectLayout
