

import React from 'react';
import { Card, Container, ListGroup, ListGroupItem, Form, Col, Row, Modal, Button } from 'react-bootstrap';

class AddPeople extends React.Component{
    constructor(props){
        //gets addTask(newTask) as props. used in saveModalIvfo
        super(props);//will get the task array and a function to add a task to the array
        this.state = {
            isModalOpen: false,
            name: '',
            bday: '',
            permission: '',
            prefferedSubjects:[]
        }
    }

    handleClose = () =>{
        this.setState({
            isModalOpen: false,
            name: '',
            bday: '',
            permission: '',
            prefferedSubjects:[]
        })
    }

    saveModalInfo = () =>{

        // TODO: Make sure the task has all the needed fields as expected
        const newPerson = {
            name: this.state.name,
            bday: this.state.bday,
            permission: this.state.permission,
            prefferedSubjects: this.state.prefferedSubjects,
        }
        console.log(newPerson.prefferedSubjects + 'in AddPaeople');
        this.props.addPeople(newPerson); 
        this.handleClose();

    }


    render(){
        // thats for adding tasks and for preffered subjects:
       
        const subjectsToChooseFrom = this.props.subjects.map((sub) => {
            return (<option>{sub.subject}</option>)
        })
        return(
          <Container>
                <Button className='add-button margin-top-10' onClick={()=>{this.setState({isModalOpen:true})}}>Add a Person</Button>

                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                {/* <Modal.Header closeButton> */}
                <Modal.Header>
                <Modal.Title className='purple'>Add a Person</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        

                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                    Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className='input-cl'
                        type="text" 
                        placeholder="Name"
                            value={this.state.name}
                            onChange={(event)=> {this.setState({name: event.target.value})}}
                            />
                    </Col>

                    <Form.Label column sm={2}>
                    Birthday:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className='input-cl' type="date" placeholder="Birthday"
                        value={this.state.bday}
                        onChange={(event)=> {this.setState({bday: event.target.value})}}
                        />
                    </Col>

                    {/* //instead of type text above, change to a select, to select from the existing subjects. use map 
                    <Form.Control as="select" custom>
                            <option>Mom</option>
                            <option>Dad</option>
                            <option>Adi</option>
                            <option>Yair</option>
                            </Form.Control> */}
{/* 
                    <Form.Label column sm={2}>
                    Subject:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Task Subject"
                        value={this.state.subject}
                        onChange={(event)=> {this.setState({subject: event.target.value})}}
                        />
                    </Col> */}


                    {/* Change Permission to choose from 3 options */}
                    
                    <Form.Label column sm={2}>
                    Permission:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className='input-cl' as="select" custom
                            value={this.state.permission}
                            onChange={(event)=> {this.setState({permission: event.target.value})}}
                        >
                                <option>Admin</option>
                                <option>Child</option>
                                <option>Charlady</option>
                        </Form.Control>
                    </Col>
                    
                    {/* //Should be able to choose subjects from the subjects list and add them to prefferedSubjects */}
                    <Form.Label column sm={2}>
                    Preffered Subjects:
                   {/* //subjectsToChooseFrom */}
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control className='input-cl' as="select" custom
                            value={this.state.prefferedSubjects}
                            onChange={(event)=> {this.setState({prefferedSubjects: event.target.value})}}
                        >
                                {subjectsToChooseFrom}
                        </Form.Control>
                        {/* <Form.Control type="text" placeholder="Preffered Subjects"
                        value={this.state.prefferedSubjects}
                        onChange={(event)=> {this.setState({prefferedSubjects: event.target.value})}}
                        /> */}
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

export default AddPeople;