import React from 'react'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function SendScore() {
    return (
        <div className='form-group'>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First name (ชื่อ)</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your Firstname" 
            
            />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last name (นามสกุล)</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Password" 
            
            />
          </Form.Group>
        </Row>
      
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>ภาควิชา</Form.Label>
          <Form.Control 
          type="dropdown"
          
          />
        </Form.Group>
    
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
      
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />     
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default SendScore; 



