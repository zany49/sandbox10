import React from 'react'
import { Form  } from 'react-bootstrap';

class PersonFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

setFilter = (event) => {
    this.props.setFilter({'name': event.target.value })
}

    render(){
        
        const myPeople = this.props.people.map((person)=>{return (<option>{person.name}</option>)});
        return(

                    // <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Filter by Person</Form.Label>
                            {/* Change onClick instead of onChanged */}
                            <Form.Control as="select" custom onChange={this.setFilter}>
                                {myPeople}
    
                            </Form.Control>
                        </Form.Group>
                    // </Form>
        
        );
    }
}

export default PersonFilter;
