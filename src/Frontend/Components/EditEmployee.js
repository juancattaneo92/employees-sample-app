import React from 'react';
import { Modal, Button, Form, Container, Col, Row} from "react-bootstrap"; 
import './Styles/Styles.css';

const EditEmployee = ({ show, handleClose, updateEmployee, employee, handleChange}) => {

const handleUpdate = () =>{
  updateEmployee()
  handleClose();
}



  return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row md={2}>
            <Col md={10}><div>Edit {employee.firstName}'s Info:</div></Col>
          </Row>
          <Row>
            <div className="info1-container">
              <img src={employee.avatar} style={{width:160, height:120, borderRadius:50}} alt="" ></img>
            </div>
            <Col md={8} style={{display:'flex'}}>
              <div className="info2-container">
                <div>First Name: 
                  <Form.Control size={'sm'} type="text" placeholder="First Name" onChange={e => handleChange(e.target.value)} defaultValue={`${employee.firstName}`}/>
                </div>
                <div>Last Name: 
                <Form.Control size={'sm'} type="text" placeholder="Last Name" onChange={e => handleChange(e)} defaultValue={`${employee.lastName}`}/>
                </div>
                <div>Email: 
                  <Form.Control size={'sm'} type="text" placeholder="Email" onChange={e => handleChange(e)} defaultValue={`${employee.email}`}/>
                </div>
                <div>Phone: 
                  <Form.Control size={'sm'} placeholder="Phone" onChange={e => handleChange(e)} defaultValue={`${employee.phone}`}/>
                </div>
              </div>
              
            </Col>
          </Row>
          <Row style={{width:"110%"}}>
            <Col md={11} style={{height:'auto', margin:"20px 5px"}}>
              <div>Biography:
              <Form.Control rows={4} as="textarea" placeholder="Bio" onChange={e => handleChange(e)} defaultValue={`${employee.bio}`}/>
              </div>
            </Col>
          </Row>
          <Row style={{width:"100%"}}>
            <div style={{margin:"10px"}}>Edit Address:</div>
            <Col md={{ span: 11, offset: 1 }} style={{display:'flex'}}>
              <div style={{width:"120%"}}>
                   <div>Street: <Form.Control style={{width: "100%"}} size={'sm'} type="text" placeholder="Street Address" onChange={e => handleChange(e)} defaultValue={`${employee.address.streetAddress}`}/></div>
                   <div className="inner-info-container">
                    <div>City: <Form.Control style={{width: 150}} size={'sm'} type="text" placeholder="City" onChange={e => handleChange(e)} defaultValue={`${employee.address.city}`}/></div>
                    <div>State: <Form.Control style={{width: 80}} size={'sm'} type="text" placeholder="State" onChange={e => handleChange(e)} defaultValue={`${employee.address.state}`}/></div>
                    <div>Zip Code: <Form.Control style={{width: 100}} size={'sm'} type="text" placeholder="Zip Code" onChange={e => handleChange(e)} defaultValue={`${employee.address.zipCode}`}/></div>
                   </div>
              </div>
            </Col>
          </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditEmployee;
