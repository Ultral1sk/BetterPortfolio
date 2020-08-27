import React from "react";

import Bounce from 'react-reveal/Bounce';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },


}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hover, sethover] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    sethover(false)

  };

  const handleHover = () => {
    sethover(true)
  }
  const handleLeave = () => {
    sethover(!hover)
  }


  return (
    <div onMouseOver={handleHover} onMouseLeave={handleLeave}>
      {hover ? <h2 className="onMouseOver keyword">PICK!</h2> : ''}

    {
        open ? '' :  
        
        <button type="button" 
        onClick={handleOpen} 
        id="modal-btn-styles"
        className={`${props.class}`}
        style={{
          background : `url(${open ? ''  : props.image }) center center no-repeat`,
          backgroundSize: '100% 100%',
          border : "none",
        
      }}>
        {props.name}
      </button>

    }
     
      <Bounce>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
     
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          
          <div className="paper">
            <h1 id="transition-modal-title text-center">{props.name}</h1>
  
            <h4 className="description" id="transition-modal-description"><span className="keyword">Description </span>: {props.description}</h4>
            <h4 className="description" id="transition-modal-description"><span className="keyword">Technologies </span> : {props.technologies}</h4>
            <h4 className="description" id="transition-modal-description"><span className="keyword">Published </span> : Yes / <a href={props.link}>Link</a></h4>
            
            <button  className="throw-btn"   onClick={handleClose}>Throw   </button>
          </div>
        </Fade>
      </Modal>
      </Bounce>
    </div>
  );
}
