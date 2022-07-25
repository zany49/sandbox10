import React from 'react';
import { Card, Container, ListGroup, ListGroupItem, Form, Col, Row, Modal, Button } from 'react-bootstrap';

class AddSubject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            subject: ''
        }
    }

    handleClose = () =>{
        this.setState({

            isModalOpen: false,
            subject: ''
        })
    }

    saveModalInfo = () =>{

        // TODO: Make sure the subject has all the needed fields as expected
        const newSubject = {
            subject: this.state.subject,
            
        }
        console.log('in save|ModalInfo '+newSubject.subject)
        this.props.addSubject(newSubject); 
        this.handleClose();

    }

    render(){
        return(
          <Container>
                <Button className='add-button margin-top-10' onClick={()=>{this.setState({isModalOpen:true})}}>Add a Subject</Button>
          
                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                {/* <Modal.Header closeButton> */}
                <Modal.Header>
                <Modal.Title>Add a Subject</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        

                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                    Subject:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="text" 
                        placeholder="Subject"
                            value={this.state.title}
                            onChange={(event)=> {this.setState({subject: event.target.value})}}
                            />
                    </Col>
                    
                </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                <Button className='add-button' onClick={this.handleClose}>
                    Close
                </Button>
                <Button type="button" className='add-button' onClick={this.saveModalInfo}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
          </Container>
        )
    }
}


export default AddSubject;



   

    


