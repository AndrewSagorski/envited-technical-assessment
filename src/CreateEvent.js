import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CreateEvent(){
    return (
      <div className="CreateEvent d-flex align-items-center justify-content-center text-center min-vh-100">
        <Container>                        
            <span class="landing-header" style={{ marginBottom: "3vh", textAlign: "right", paddingRight: "1vw"}}>
              Create               
            </span>
            <span class="landing-header-bold">
              Event              
            </span>           

            <Form class="mt-10">    
                <Row>
                    <Col>
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter event name" /> 
                    </Col>

                    <Col>
                        <Form.Label>Host Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter host name" />                    
                    </Col>

                    <Col>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Location" />                   
                    </Col>
                    
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" name='Start Date'/> 
                    </Col>

                    <Col>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" name='End Date'/>                   
                    </Col>

                    <Col>
                        <Form.Label>Event Image</Form.Label>
                        <Form.Control type="file" name='Upload Event Image'/>                   
                    </Col>                     
                    
                </Row>          

            </Form>

            <Row style={{ marginTop: "3vh"}}>
                <Col>
                <Link to = '/Event'>
                    <Button className='button-colour'>submit</Button>{' '} 
                </Link>  
                </Col>           
            </Row>

        </Container>        
        </div>            
    );
}