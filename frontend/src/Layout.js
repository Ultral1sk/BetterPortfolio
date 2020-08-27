import React          from 'react';

const Layout = (props) => {

 // the inner height is being used with a condition 
 //because 
 //it needs to be rerendered all the time 
 //so it fits to every screen height when changed
//  style={{ background:`url(${mainBackground})  bottom no-repeat`,  height:`${window.innerHeight ? '' : window.innerHeight}px`}}  
  return (
    <div     className="wrapper_main_background">
 
         {props.children}

    </div>
  )
} 


export default Layout
