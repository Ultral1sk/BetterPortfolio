import React, {useState, useEffect }      from 'react'
import { Link }                           from 'react-router-dom'
import axios                              from 'axios'

import leftSign                           from '../../assets/images/waypoint/signLeft.png'
import arrowLeft                          from '../../assets/images/waypoint/arrowLeft.png'
import Linkedin                           from '../../assets/images/logos/pair/linked.png'
import Xing                               from '../../assets/images/logos/pair/xing.png'
import Git                                from '../../assets/images/logos/pair/git.png'




const Contact = () => {

  // custom hook to read the input values
  const [state, setstate] = useState({
    name : '',
    email : '',
    message : '',
  })
  const [success, setSuccess] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [failed, setFailed] = useState('')


  const onChangeHandler = ( e ) => {
    const { name, value } = e.target

    setstate(prevState => ({
      ...prevState,
      [name] : value
    }))
  }


  const submitHandler = async (e) => {
    
    e.preventDefault();

    if(state.email === '' || state.name === '' || state.message === '') {
      setFailed('Complete The Report Please')
      setTimeout(() => {
        setFailed('')
      }, 1000);

    }
    else {
     
        const request = await axios.post(`http://localhost:3001/contact`, state)
        .then(res => {
  
          if( res.status === 200 ) {
  
            setSuccess('Email Sent Successfully')
            setDisabled(true)
            setstate({ name : "",  email : '', message : "" })
  
            setTimeout(() => { 
  
              setSuccess('')  
              setDisabled(false)
  
          }, 1500);
  
          }  
        })
        .catch(err => err)
  
        return request
    }

  }


  console.log(state)

  return (
    <div className=" main_contact_page_wrapper d-flex " >
      
      {/* sign wrapper */}
      <div className="contact_waypoint_sign_wrapper col-2 d-flex justify-content-center align-items-end h-100 ">
          
          {/* mobile version sign */}
          <img className="d-none d-lg-block contact_waypoint_left_sign" src={leftSign} alt="left_sign" />
            <Link className="contact_sign_link-left d-none d-lg-block" to="/projects">
                Projects
              </Link>

            {/* desktop version sign */}
            <Link to="/" className="d-block d-lg-none">
          <img className="contact_left_arrow_sign" src={arrowLeft} alt="left_sign" />
          
          </Link>
      </div>
      {/* sign wrapper */}



      {/* SCROLL WRAPPER */}
      <div className="form_scroll_wrapper  d-flex justify-content-center">
        <div className="form_scroll-controller  d-flex justify-content-center align-items-center">
          <div className="form_scroll col-10 col-lg-5">
              <div >
              {
                success !== '' || failed !== '' ?
                <div>
                  <h2 className="success_msg">{success}</h2> 
                  <h2 className="failed_msg">{failed}</h2> 
                </div>
         
              : 
                <h2> Contact </h2>
              }
              </div>
                <hr className="w-50" />


              <form onSubmit={submitHandler} autoComplete="off" autoSave="off" className="w-100 h-50 d-flex flex-column justify-content-around align-self-center">
              

              {/* NAME input */}
                <div className="git_wrapper d-flex justify-content-between align-items-center">
                  <a href="https://www.xing.com/profile/Jovan_Derebanoski?sc_o=navigation_profile&sc_o_PropActionOrigin=navigation_badge_profile" className="git_In_Link">
                    <img id="link_icons"  src={Git} alt="git_external_link_to_profile"/>
                  </a>
                  <input  name="name" type="text" value={state.name} onChange={onChangeHandler} placeholder="Name" />
                </div>



              {/* EMAIL input */}
                <div className="linkedin_wrapper d-flex justify-content-between align-items-center ">
                  <a href="https://www.linkedin.com/in/jovan-derebanoski-7a053b153/" className="linked_In_Link">
                    <img id="link_icons" src={Linkedin} alt="linkedin_external_link_to_profile"/>
                  </a>
                  <input  name="email" type="email" value={state.email} onChange={onChangeHandler} placeholder="E-MAIL" />
                </div>


              {/* COMMENT / CONTACT input */}

                <div className="xing_wrapper  d-flex justify-content-between align-items-center">
                  <a href="https://www.xing.com/profile/Jovan_Derebanoski?sc_o=navigation_profile&sc_o_PropActionOrigin=navigation_badge_profile" className="xing_In_Link">
                    <img id="link_icons" src={Xing} alt="xing_external_link_to_profile"/>
                  </a>
                  <textarea name="message"  type="text" value={state.message}  onChange={onChangeHandler} placeholder="Contact / Comment" />
                </div>



                <div className="button_wrapper">
            
                  <button disabled={disabled} type="submit">
                      Submit
                  </button>
                </div>


              </form>


          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Contact
