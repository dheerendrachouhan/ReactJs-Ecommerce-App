import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const Toasts = (props) => {
  const [show, setShow] = useState(false);
  const iconClass = props.icon ? props.icon: "fa-square-info"


  useEffect(() => {
    setShow(props.show);
    setTimeout(()=> {
        props.resetStatus()
    }, 1000)
    
  }, [props.show])

  const fixCss = {
        left: '40%',        
        position:'fixed',
        width: '30%',
        'overflow-y':'hidden',  
        'overflow-x':'auto',
        'z-index': 'auto' 
   }

  return (
        <Toast style={fixCss}
            bg="warning" onClose={() => setShow(false)} show={show} delay={1000} autohide>
            <Toast.Header closeButton={false}>
                <span><i className={`fa ${iconClass}`}></i></span>
                <strong className="me-auto">{props.header}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
  );
}

export default Toasts;