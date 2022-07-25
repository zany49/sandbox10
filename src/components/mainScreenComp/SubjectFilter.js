import React from 'react'
import { Form  } from 'react-bootstrap';
import App from '../../App.css';


class SubjectFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    setFilter = (event) => {
        this.props.setFilter({'subject': event.target.value })
    }
    render(){

        const mySubjects = this.props.subjects.map((sub)=>{return (<option>{sub.subject}</option>)});

        return(
                    // <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Filter by Subject</Form.Label>
                            <Form.Control as="select" custom onChange={this.setFilter}>
                                {mySubjects}
                            {/* <option>Sub1</option>
                            <option>Sub2</option>
                            <option>Sub3</option>
                            <option>Sub4</option> */}
                            </Form.Control>
                        </Form.Group>
                    // </Form>
        
        );
    }
}

export default SubjectFilter;
