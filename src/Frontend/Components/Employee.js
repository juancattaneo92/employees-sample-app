import React from "react";
import { Accordion, Container, Row, Col, Button } from "react-bootstrap";
import Collapse from "@kunukn/react-collapse";
import './Styles/Styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import EditEmployee from "./EditEmployee";
import './Styles/Styles.css';

export const Employee = ({ isOpen, onToggle, employee, updateEmployee, deleteEmployee, handleChange, show, handleShow, handleClose}) => {

  return (
    <>
    {show && (<EditEmployee 
                updateEmployee={updateEmployee} 
                handleClose={handleClose} 
                show={show} 
                employee={employee} 
                handleChange={handleChange} 
                />)}
    <Accordion.Item className="block">
      <button className="btn toggle button-toggle" onClick={onToggle}>
        <div className="button-container">
          <div>{employee.firstName}</div>
          <FontAwesomeIcon icon={!isOpen ? faAngleDown : faAngleUp } size="lg" />
        </div>
      </button>
      <Collapse isOpen={isOpen}>
        <Container>
          <Row md={2}>
            <Col md={10}><div>{employee.firstName}'s Info:</div></Col>
            <Col md={2}>
              <div style={{display:'flex', justifyContent:'space-around'}}>
                <Button onClick={handleShow} className="button-2" variant="warning" >Edit</Button>
                <Button onClick={deleteEmployee} className="button-2" variant="danger" >Delete</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="info1-container">
              <img src={employee.avatar} style={{width:200, height:150, borderRadius:50}} alt=""></img>
            </div>
            <Col md={{ span: 3, offset: 0.5 }} style={{display:'flex'}}>
              <div className="info2-container">
                <div>First Name: {employee.firstName}</div>
                <div>Last Name: {employee.lastName}</div>
                <div>Email: {employee.email}</div>
                <div>Phone: {employee.phone}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={11} style={{height:'auto', margin:"20px 20px"}}><div>{employee.bio}</div></Col>
          </Row>
          <Row>
            <div style={{margin:"10px 20px"}}>Address:</div>
            <Col md={{ span: 6, offset: 1 }} style={{display:'flex'}}>
              <div className="info3-container">
                   <div>Street: {employee.address.streetAddress}</div>
                   <div className="inner-info-container">
                    <div>City: {employee.address.city}</div>
                    <div>State: {employee.address.state}</div>
                    <div>Zip Code: {employee.address.zipCode}</div>
                   </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Collapse>
    </Accordion.Item>
  </>
  );
}

export default Employee;